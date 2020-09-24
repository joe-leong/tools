<script>
export default {
  name: "MediaIcon",
  functional: true,
  props: {
    iconClass: {
      type: String,
      default: "setting.svg"
    }
  },
  render(h, context) {
    const { iconClass } = context.props;
    const vnode = []
    const requires = require(`./imgs/${iconClass}`)
    const mask = {
      mask: `url(${requires}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${requires}) no-repeat 50% 50%`
    }
    vnode.push(<div style={mask} class="media-icon" />)
    return vnode
  }
};
</script>
<style lang="scss" scoped>
.media-icon{
  display: inline-block;
  width: 3em;
  height: 3em;
  background-color: $iconColor;
  mask-size: cover!important;
  transition: background .3s;
  cursor: pointer;
  &:hover{
    background-color: $iconActiveColor
  }
}
</style>