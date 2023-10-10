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
                    'hz-input-suffix': $slots.suffix || suffixIcon || clearable || showPassword,
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
                        :type="showPassword ? passWord ? 'password' : 'text' :type"
                        :value="modelValue"
                        :autofocus="autofocus"
                        :readonly="readonly"
                        :disabled="disabled"
                        :autocomplete="autocomplete"
                        :placeholder="placeholder"
                        v-bind="$attrs"
                        @focus="handleFocus"
                        @blur="handleBlur"
                        @input="handleInput"
                        @change="handleChange"
                    />
                    <!--后缀图标, 三个只能有一个存在-->
                    <span class="input-suffix" v-if="$slots.suffix || suffixIcon || showClear || showPassword">
                        <span class="suffix" v-if="$slots.suffix"><slot name="suffix"></slot></span>
                        <Icon :name="suffixIcon" v-else-if="suffixIcon"></Icon>
                        <Icon name="close-bold" v-else-if="showClear" @click.stop="handleClear"></Icon>
                        <span v-else-if="showPassword">
                            <Icon name="browse" v-if="passWord" @click.stop="passWord = false"></Icon>
                            <Icon name="hide" v-else @click.stop="passWord = true"></Icon>
                        </span>
                    </span>
                </section>

                <!--后置元素-->
                <span class="input-append" v-if="$slots.append">
                    <slot name="append"></slot>
                </span>
            </section>
        </template>
        <template v-else>
            <textarea
                :style="{resize: resize}"
                :value="modelValue"
                :cols="cols"
                :rows="rows"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                v-bind="$attrs"
            ></textarea>

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
        resize: { // textarea的拉伸控制
            type: String,
            default: "none"
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
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        cols: {
            type: Number,
            default: 30
        },
        rows: {
            type: Number,
            default: 2
        }
    });


    const isFocus = ref(false),
          isHover = ref(false),
          focusColor = ref("rgba(64, 158, 255, 1)"),
          passWord = ref(true); // 控制密码显隐

    // 显示清除按钮的条件
    // 传递显示clearable, 不只读，不disabled, input框有值, focus或者hover
    const showClear = computed(()=>{
        return props.clearable && !props.readonly && !props.disabled && props.modelValue && (isFocus.value || isHover.value);
    });

    // 全局指令v-model vue官方定义的emit是update:modelValue
    const emitEvent = defineEmits(["update:modelValue", "focus", "blur", "change"]);

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

    // 输入框失去焦点时的值
    const handleChange = (e)=>{
        emitEvent("change", e.target.value);
    };


</script>

<style lang="scss" scoped>
    .hz-input{
        display: inline-block;
        input{
            width: 100%;
            border: none;
            outline: none;
            box-sizing: border-box;
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
                font-size: 16px;
            }
            .input-prepend, .input-append{
                padding: 8px 5px;
            }
        }
        &.medium{
            input{
                padding: 8px 4px;
                font-size: 18px;
            }
            .input-prepend, .input-append{
                padding: 10px 5px;
            }
        }
        &.large{
            input{
                padding: 12px 8px 12px 12px;
                font-size: 20px;
            }
            .input-prepend, .input-append{
                padding: 12px 5px;
            }
        }
    }
    .hz-textarea{
        & > textarea{
            min-width: 200px;
            min-height: 30px;
        }
    }
</style>
