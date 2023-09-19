<script name="hz-row">
    import {defineComponent, h} from "vue";
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
            return h(context.$slots.default);
        }
    });
</script>

<style scoped lang="scss">

</style>
