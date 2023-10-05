<script lang="ts">
    import { defineComponent, h } from "vue";
    export default defineComponent({
        name: "hzRow",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            gutter: {
                type: Number,
                default: 0
            },
            justify: {
                type: String,
                default: "flex-start"
            },
            align: {
                type: String,
                default: "flex-start"
            }
        },
        render(context){ // 此处只有context，3.3之前的setup函数有props和context

            const {tag, gutter, justify, align} = context.$props;

            const slotList = context.$slots.default(),
                  slotEle = slotList.map((ele)=>{
                      // 此处props上设置key导致元素不能复用,所以每次输入一下导致失焦重新渲染一次
                      return h(ele,{
                          style: {
                              paddingLeft: `${gutter/2}px`,
                              paddingRight: `${gutter/2}px`,
                          }
                      });
                  });

            return h(
                `${tag}`,
                {
                    class: [
                        "hz-row"
                    ],
                    style: {
                        justifyContent: justify,
                        alignItems: align,
                        marginBottom: gutter+"px"
                    }
                },
                slotEle
            );
        }
    });
</script>
<style lang="scss">
    .hz-row{
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        &:last-of-type{
            margin-bottom: 0 !important;
        }
    }
</style>

