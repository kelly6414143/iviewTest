<script>
export default {
    functional: true,
    render: function (h,ctx) {
        // window.console.log(h,ctx.children)
        return (
            ctx.children?ctx.children:''
        )
    }
}
</script>