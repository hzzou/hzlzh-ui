<template>
    <div class="hz-popper" ref="popperRef" id="hzPopper" @mouseenter="handleEnter" @mouseleave="handleLeave">
        <slot></slot>
        <div class="hz-content" v-show="showPopper" :style="{width: width+'px',...popperStyle}">
            <div class="tip" :style="tipColor"></div>
            <div class="tip-cover" :style="tipCoverColor"></div>
            <div class="title">
                <slot name="title">{{title}}</slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>

</template>
<script name="hz-popper" setup lang="ts">

    import { ref } from "vue";

    const props = defineProps({
        place: {
            type: String,
            default: "bottom"
        },
        width: {
            type: [String, Number],
            default: 150
        },
        title: {
            type: String,
            default: ""
        }
    });

    const showPopper = ref(false),
          popperStyle = ref(null),
          tipColor = ref(null),
          tipCoverColor = ref(null),
          popperRef = ref(null);

    const emitEvent = defineEmits(["show", "hide"]);

    const handleEnter = (event) => {
        showPopper.value = true;
        emitEvent("show", { show: true, event: event});
        const rect  = document.querySelector("#hzPopper").getClientRects()[0];

        switch (props.place) {
        case "bottom":
            popperStyle.value = {
                left: "50%",
                transform: "translateX(-50%)",
                top: (rect.height+5)+"px",
            };
            tipColor.value = {
                left: "50%",
                transform: "translateX(-50%)",
                borderBottomColor:"#dedede",
                top: "-10px"
            };
            tipCoverColor.value = {
                left: "50%",
                transform: "translateX(-50%)",
                borderBottomColor:"#fff",
                top: "-8px"
            };
            break;
        case "bottom-start":
            popperStyle.value = {
                left: 0,
                top: (rect.height+5)+"px",
            };
            tipColor.value = {
                left: "5px",
                borderBottomColor:"#dedede",
                top: "-10px"
            };
            tipCoverColor.value = {
                left: "5px",
                borderBottomColor:"#fff",
                top: "-8px"
            };
            break;
        case "bottom-end":
            popperStyle.value = {
                right: 0,
                top: (rect.height+5)+"px",
            };
            tipColor.value = {
                right: "5px",
                borderBottomColor:"#dedede",
                top: "-10px"
            };
            tipCoverColor.value = {
                right: "5px",
                borderBottomColor:"#fff",
                top: "-8px"
            };
            break;
        case "top":
            popperStyle.value = {
                left: "50%",
                transform: "translateX(-50%)",
                bottom: (rect.height+5)+"px",
            };
            tipColor.value = {
                left: "50%",
                transform: "translateX(-50%)",
                borderTopColor:"#dedede",
                bottom: "-10px"
            };
            tipCoverColor.value = {
                left: "50%",
                transform: "translateX(-50%)",
                borderTopColor:"#fff",
                bottom: "-8px"
            };
            break;
        case "top-start":
            popperStyle.value = {
                left: 0,
                bottom: (rect.height+5)+"px",
            };
            tipColor.value = {
                left: "5px",
                borderTopColor:"#dedede",
                bottom: "-10px"
            };
            tipCoverColor.value = {
                left: "5px",
                borderTopColor:"#fff",
                bottom: "-8px"
            };
            break;
        case "top-end":
            popperStyle.value = {
                right: 0,
                bottom: (rect.height+5)+"px",
            };
            tipColor.value = {
                right: "5px",
                borderTopColor:"#dedede",
                bottom: "-10px"
            };
            tipCoverColor.value = {
                right: "5px",
                borderTopColor:"#fff",
                bottom: "-8px"
            };
            break;
        case "left":
            popperStyle.value = {
                top: "50%",
                transform: "translateY(-50%)",
                right: (rect.width+5)+"px",
            };
            tipColor.value = {
                top: "50%",
                transform: "translateY(-50%)",
                borderLeftColor:"#dedede",
                right: "-10px"
            };
            tipCoverColor.value = {
                top: "50%",
                transform: "translateY(-50%)",
                borderLeftColor:"#fff",
                right: "-8px"
            };
            break;
        case "left-start":
            popperStyle.value = {
                top: 0,
                right: (rect.width+5)+"px",
            };
            tipColor.value = {
                top: "5px",
                borderLeftColor:"#dedede",
                right: "-10px"
            };
            tipCoverColor.value = {
                top: "5px",
                borderLeftColor:"#fff",
                right: "-8px"
            };
            break;
        case "left-end":
            popperStyle.value = {
                bottom: 0,
                right: (rect.width+5)+"px",
            };
            tipColor.value = {
                bottom: "5px",
                borderLeftColor:"#dedede",
                right: "-10px"
            };
            tipCoverColor.value = {
                bottom: "5px",
                borderLeftColor:"#fff",
                right: "-8px"
            };
            break;
        case "right":
            popperStyle.value = {
                top: "50%",
                transform: "translateY(-50%)",
                left: (rect.width+5)+"px",
            };
            tipColor.value = {
                top: "50%",
                transform: "translateY(-50%)",
                borderRightColor:"#dedede",
                left: "-10px"
            };
            tipCoverColor.value = {
                top: "50%",
                transform: "translateY(-50%)",
                borderRightColor:"#fff",
                left: "-8px"
            };
            break;
        case "right-start":
            popperStyle.value = {
                top: 0,
                left: (rect.width+5)+"px",
            };
            tipColor.value = {
                top: "5px",
                borderRightColor:"#dedede",
                left: "-10px"
            };
            tipCoverColor.value = {
                top: "5px",
                borderRightColor:"#fff",
                left: "-8px"
            };
            break;
        case "right-end":
            popperStyle.value = {
                bottom: 0,
                left: (rect.width+5)+"px",
            };
            tipColor.value = {
                bottom: "5px",
                borderRightColor:"#dedede",
                left: "-10px"
            };
            tipCoverColor.value = {
                bottom: "5px",
                borderRightColor:"#fff",
                left: "-8px"
            };
            break;
        }
    };

    const handleLeave = (event) => {
        showPopper.value = false;
        emitEvent("hide", { hide: true, event: event});
    };

</script>

<style scoped lang="scss">
    .hz-popper{
        position: relative;
        display: inline-block;
        .hz-content{
            position: absolute;
            z-index: 10000;
            border:1px solid #dedede;
            padding: 5px 10px;
            background: #fff;
            border-radius: 4px;
            word-wrap: break-word;
            .tip,.tip-cover{
                position: absolute;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 5px;
                border-color: transparent;
            }
            .title{
                color: #333;
                font-size: 18px;
                margin-bottom: 5px;
            }
            .content{
                color: #666;
                font-size: 14px;
                line-height: 1.5em;
            }
        }
    }
</style>
