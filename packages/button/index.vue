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
                background: #fff;
                .hz-icon{
                    color: #333 !important;
                }
                &:hover,&.loading{
                    background: rgba(64, 158, 255, 0.1);
                    color: rgba(64, 158, 255, 1);
                    border-color: rgba(64, 158, 255, 0.3);
                }
            }
            &.primary{
                background: rgba(64, 158, 255, 1);
                color: #fff;
                .hz-icon{
                    color: #fff !important;
                }
                &:hover,&.loading {
                    background: rgba(64, 158, 255, 0.8);
                }

                &.plain{
                    background: rgba(64, 158, 255, 0.1);
                    color: rgba(64, 158, 255, 1);
                    &:hover,&.loading {
                        background: rgba(64, 158, 255, 1);
                        color: #fff;
                    }
                }
            }
            &.success{
                background: rgba(103, 194, 58, 1);
                color: #fff;
                .hz-icon{
                    color: #fff !important;
                }
                &:hover,&.loading {
                    background: rgba(103, 194, 58, 0.8);
                }

                &.plain{
                    background: rgba(103, 194, 58, 0.1);
                    color: rgba(103, 194, 58, 1);
                    &:hover,&.loading {
                        background: rgba(103, 194, 58, 1);
                        color: #fff;
                    }
                }
            }
            &.warning{
                background: rgba(230, 162, 60, 1);
                color: #fff;
                .hz-icon{
                    color: #fff !important;
                }
                &:hover,&.loading {
                    background: rgba(230, 162, 60, 0.8);
                }

                &.plain{
                    background: rgba(230, 162, 60, 0.1);
                    color: rgba(230, 162, 60, 1);
                    &:hover,&.loading {
                        background: rgba(230, 162, 60, 1);
                        color: #fff;
                    }
                }
            }
            &.danger{
                background: rgb(245, 108, 108, 1);
                color: #fff;
                .hz-icon{
                    color: #fff !important;
                }
                &:hover {
                    background: rgba(245, 108, 108, 0.8);
                }

                &.plain{
                    background: rgba(245, 108, 108, 0.1);
                    color: rgba(245, 108, 108, 1);
                    &:hover,&.loading {
                        background: rgba(245, 108, 108, 1);
                        color: #fff;
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
