<template>
    <div class="hz-button">
        <button
            @click="handleClick"
            :class="[
                type,size,
                {
                    'round': round,
                    'circle': circle,
                    'plain': plain,
                    'loading': loading
                }
            ]"
            :type="nativeType"
            :disabled="disabled">
            <Icon class="icon-loading" v-if="loading" name="loading"></Icon>
            <Icon :name="iconName" v-if="iconName && !loading"></Icon>
            <span v-if="$slots.default"><slot></slot></span>
        </button>
    </div>
</template>
<script name="hz-button" setup lang="ts">
    import Icon from "../icon";

    const props = defineProps({
        type: {
            type: String,
            default: "default"
        },
        nativeType: {
            type: String,
            default: "button"
        },
        size: {
            type: String,
            default: "medium"
        },
        iconName: {
            type: String,
            default: ""
        },
        loading: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        plain: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    });

    // 事件
    const emitEvent = defineEmits(["click"]);

    const handleClick = (event)=>{
        emitEvent("click", event);
    };

</script>

<style scoped lang="scss">
    @import "../../assets/common/css/var.scss";
    .hz-button{
        @keyframes loading-rotate {
            100% {
                transform: rotate(360deg);
            }
        }

        button{
            outline: none;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            &:disabled{
                cursor: not-allowed;
            }

            .hz-icon + span{
                margin-left: 6px;
            }

            // 圆
            &.circle{
                border-radius: 50%;
            }

            // 按钮大小
            &.small{
                padding: 5px 10px;
                &.round{
                    border-radius: 18px;
                }
            }
            &.medium{
                padding: 7px 14px;
                &.round{
                    border-radius: 21px;
                }
            }
            &.large{
                padding: 10px 22px;
                &.round{
                    border-radius: 30px;
                }
            }

            // 按钮类型
            &.default{
                border:1px solid #ddd;
                background: $-color-white;
                .hz-icon{
                    color: #333 !important;
                }
                &:hover,&.loading{
                    background: $-color-primary-light-1;
                    color: $-color-primary;
                    border-color: $-color-primary-light-3;
                }
            }
            &.primary{
                background: $-color-primary;
                color: $-color-white;
                .hz-icon{
                    color: $-color-white !important;
                }
                &:hover,&.loading {
                    background: $-color-primary-light-8;
                }

                &.plain{
                    background: $-color-primary-light-1;
                    color: $-color-primary;
                    &:hover,&.loading {
                        background: $-color-primary;
                        color: $-color-white;
                    }
                }
            }
            &.success{
                background: $-color-success;
                color: $-color-white;
                .hz-icon{
                    color: $-color-white !important;
                }
                &:hover,&.loading {
                    background: $-color-success-light-8;
                }

                &.plain{
                    background: $-color-success-light-1;
                    color: $-color-success;
                    &:hover,&.loading {
                        background: $-color-success;
                        color: $-color-white;
                    }
                }
            }
            &.warning{
                background: $-color-warning;
                color: $-color-white;
                .hz-icon{
                    color: $-color-white !important;
                }
                &:hover,&.loading {
                    background: $-color-waring-light-8;
                }

                &.plain{
                    background: $-color-waring-light-1;
                    color: $-color-warning;
                    &:hover,&.loading {
                        background: $-color-warning;
                        color: $-color-white;
                    }
                }
            }
            &.danger{
                background: $-color-danger;
                color: $-color-white;
                .hz-icon{
                    color: $-color-white !important;
                }
                &:hover {
                    background: $-color-danger-light-8;
                }

                &.plain{
                    background: $-color-danger-light-1;
                    color: $-color-danger;
                    &:hover,&.loading {
                        background: $-color-danger;
                        color: $-color-white;
                    }
                }
            }

            .icon-loading{
                display: inline-block; //解决添加动画不生效
                animation: loading-rotate 2s linear infinite;
            }
        }
    }
</style>
