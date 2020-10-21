export const Dimension = {
  updateDimensions : (context) => {
    context.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
}
