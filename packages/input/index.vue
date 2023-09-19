<template>
    <div :class="[
        props.type === 'textarea' ? 'hz-textarea' : 'hz-input',
        size
    ]">
        <template v-if="type !== 'textarea' ">
            <!--此处两个动态class配合对应内容时固定宽度-->
            <section class="wrap"
                 @mouseenter="isHover = true"
                 @mouseleave="isHover = false"
            >
                <!--前置元素-->
                <span class="input-prepend" v-if="$slots.prepend">
                    <slot name="prepend"></slot>
                </span>
                <section :class="['input-wrap',{
                    'hz-input-prefix': $slots.prefix || prefixIcon,
                    'hz-input-suffix': $slots.suffix || suffixIcon || clearable,
                    'is-disabled': disabled
                }]" :style="{
                    borderTopLeftRadius: $slots.prepend ? 0 : null,
                    borderBottomLeftRadius: $slots.prepend ? 0 : null,
                    borderTopRightRadius: $slots.append ? 0 : null,
                    borderBottomRightRadius: $slots.append ? 0 : null,
                    borderColor: isFocus ? focusColor : null } ">
                    <!--前缀图标-->
                    <span class="input-prefix" v-if="$slots.prefix || prefixIcon">
                        <span class="prefix" v-if="$slots.prefix"><slot name="prefix"></slot></span>
                        <Icon :name="prefixIcon" v-else-if="prefixIcon"></Icon>
                    </span>
                    <input
                        :type="type"
                        :value="modelValue"
                        :autofocus="autofocus"
                        :readonly="readonly"
                        :disabled="disabled"
                        :autocomplete="autocomplete"
                        :placeholder="placeholder"
                        v-bind="$attrs"
                        @focus="handleFocus"
                        @blur="handleBlur"
                        @input="handleInput"  />
                    <!--后缀图标, 三个只能有一个存在-->
                    <span class="input-suffix" v-if="$slots.suffix || suffixIcon || showClear">
                        <span class="suffix" v-if="$slots.suffix"><slot name="suffix"></slot></span>
                        <Icon :name="suffixIcon" v-else-if="suffixIcon"></Icon>
                        <Icon name="close-bold" v-else-if="showClear" @click.stop="handleClear"></Icon>
                    </span>
                </section>

                <!--后置元素-->
                <span class="input-append" v-if="$slots.append">
                    <slot name="append"></slot>
                </span>
            </section>
        </template>

    </div>
</template>
<script lang="ts" name="hz-input" setup>
    import { computed, ref } from "vue";
    import Icon from "../icon";

    /**
     * 当要透传某些原生属性时，如果没定义在props上, 则就是在$attrs上;
     * 原生属性也可以写在API上
     */
    // 全局指令v-model vue官方定义的props是modelValue
    const props = defineProps({
        modelValue: {
            type: [String, Number],
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        size: {
            type: String,
            default: "medium"
        },
        resize: {
            type: String,
            default: "both"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        prefixIcon: {
            type: String,
            default: ""
        },
        suffixIcon: {
            type: String,
            default: ""
        },
        clearable: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: "请输入"
        }
    });


    const isFocus = ref(false),
          isHover = ref(false),
          focusColor = ref("rgba(64, 158, 255, 1)");

    // 显示清除按钮的条件
    // 传递显示clearable, 不只读，不disabled, input框有值, focus或者hover
    const showClear = computed(()=>{
        return props.clearable && !props.readonly && !props.disabled && props.modelValue && (isFocus.value || isHover.value);
    });

    // 全局指令v-model vue官方定义的emit是update:modelValue
    const emitEvent = defineEmits(["update:modelValue", "focus", "blur"]);

    // 更新value
    const handleInput = (e) => {
        emitEvent("update:modelValue", e.target.value);
    };

    const handleFocus = (e) => {
        isFocus.value = true;
        emitEvent("focus", e);
    };

    const handleBlur = (e) => {
        isFocus.value = false;
        emitEvent("blur", e);
    };

    // 清空input
    const handleClear = () => {
        emitEvent("update:modelValue", "");
    };

</script>

<style lang="scss" scoped>
    .hz-input{
        display: inline-block;
        input{
            border: none;
            outline: none;
            font-size: 20px;
            &:disabled{
                cursor: not-allowed;
            }
        }
        .wrap{
            display: flex;
            align-items: center;
            box-sizing: border-box;
            .input-prepend{
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                border: 1px solid #dedede;
                border-right: none;
            }
            .input-append{
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                border: 1px solid #dedede;
                border-left: none;
            }
            .input-wrap{
                border: 1px solid #dedede;
                box-sizing: border-box;
                border-radius: 5px;
                padding: 0 5px;
                position: relative;
                &.is-disabled{
                    background: #f5f7fa;
                    color: #999;
                }
                &.hz-input-prefix{
                    padding-left: 30px;
                }

                &.hz-input-suffix{
                    padding-right: 30px;
                }
                &:hover{
                    border-color: #ccc;
                }

                .input-prefix, .input-suffix{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .input-prefix{
                    left: 8px;
                }
                .input-suffix{
                    right: 8px;
                    .icon-close-bold{
                        cursor: pointer;
                    }
                }
            }
        }


        // size
        &.small{
            input{
                padding: 2px 2px 2px 5px;
            }
            .input-prepend, .input-append{
                padding: 8px 5px;
            }
        }
        &.medium{
            input{
                padding: 8px 4px;
            }
            .input-prepend, .input-append{
                padding: 10px 5px;
            }
        }
        &.large{
            input{
                padding: 12px 8px 12px 12px;
            }
            .input-prepend, .input-append{
                padding: 12px 5px;
            }
        }
    }
</style>
