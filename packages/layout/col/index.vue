<script lang="ts">
    import { defineComponent, h } from "vue";
    export default defineComponent({
        name: "hzCol",
        props: {
            span: {
                type: Number,
                default: 24
            },
            tag: {
                type: String,
                default: "div"
            },
            offset: {
                type: Number,
                default: 0
            },
            pull: {
                type: Number,
                default: 0
            },
            push: {
                type: Number,
                default: 0
            }
        },
        render(context){
            let classList = [];

            // 占位和移位
            ["span", "offset", "pull", "push"].map(ele=>{
                classList.push(ele != "span" ?
                    `hz-col-${ele}-${context[ele]}` :
                    `hz-col-${context[ele]}`);
            });

            // 不同尺寸
            ["xs", "sm", "md", "lg", "xl"].map(ele=>{
                // context[ele] 的时候就说明拿到指定某个尺寸了
                if(typeof context[ele] === "number"){
                    classList.push(`hz-col-${ele}-${context[ele]}`);
                }
                else if(typeof context[ele] === "object"){
                    let obj = context[ele];
                    // span的是默认尺寸
                    Object.keys(obj).map(prop=>{
                        classList.push(
                            prop !== "span" ?
                                `hz-col-${ele}-${prop}-${obj[prop]}` :
                                `hz-col-${ele}-${obj[prop]}`
                        );
                    });
                }
            });

            return h(this.tag,
                     {
                         class: ["hz-col", classList],
                     }, h(context.$slots.default));
        }
    });
</script>

<style scoped lang="scss">
@use"sass:math";
@import "index";

.hz-col{
    &.hz-col-0,
    &.hz-col-xs-0,
    &.hz-col-sm-0,
    &.hz-col-md-0,
    &.hz-col-lg-0,
    &.hz-col-xl-0{
        display: none;
    }


    @for $i from 0 to 24{
        $w: math.div(1, 24) * $i * 100%;
        &.hz-col-#{$i}{
            width: $w;
        }
        &.hz-col-offset-#{$i}{
            margin-left: $w;
        }
        &.hz-col-pull-#{$i}{
            position: relative;
            right: $w;
        }
        &.hz-col-push-#{$i}{
            position: relative;
            left: $w;
        }
    }

    @include res(xs){
        @for $i from 0 to 24{
            $w: math.div(1, 24) * $i * 100%;
            &.hz-col-xs-#{$i}{
                width: $w;
            }
            &.hz-col-xs-offset-#{$i}{
                margin-left: $w;
            }
            &.hz-col-xs-pull-#{$i}{
                position: relative;
                right: $w;
            }
            &.hz-col-xs-push-#{$i}{
                position: relative;
                left: $w;
            }
        }
    }
    @include res(sm){
        @for $i from 0 to 24{
            $w: math.div(1, 24)4 * $i * 100%;
            &.hz-col-sm-#{$i}{
                width: $w;
            }
            &.hz-col-sm-offset-#{$i}{
                margin-left: $w;
            }
            &.hz-col-sm-pull-#{$i}{
                position: relative;
                right: $w;
            }
            &.hz-col-sm-push-#{$i}{
                position: relative;
                left: $w;
            }
        }
    }
    @include res(md){
        @for $i from 0 to 24{
            $w: math.div(1, 24) * $i * 100%;
            &.hz-col-md-#{$i}{
                width: $w;
            }
            &.hz-col-md-offset-#{$i}{
                margin-left: $w;
            }
            &.hz-col-md-pull-#{$i}{
                position: relative;
                right: $w;
            }
            &.hz-col-md-push-#{$i}{
                position: relative;
                left: $w;
            }
        }
    }
    @include res(lg){
        @for $i from 0 to 24{
            $w: math.div(1, 24) * $i * 100%;
            &.hz-col-lg-#{$i}{
                width: $w;
            }
            &.hz-col-lg-offset-#{$i}{
                margin-left: $w;
            }
            &.hz-col-lg-pull-#{$i}{
                position: relative;
                right: $w;
            }
            &.hz-col-lg-push-#{$i}{
                position: relative;
                left: $w;
            }
        }
    }
    @include res(xl){
        @for $i from 0 to 24{
            $w: math.div(1, 24) * $i * 100%;
            &.hz-col-xl-#{$i}{
                width: $w;
            }
            &.hz-col-xl-offset-#{$i}{
                margin-left: $w;
            }
            &.hz-col-xl-pull-#{$i}{
                position: relative;
                right: $w;
            }
            &.hz-col-xl-push-#{$i}{
                position: relative;
                left: $w;
            }
        }
    }


}
</style>
