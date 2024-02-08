
export const Helmet = (props) => {
  document.title = "Sahil - " + props.title;

  return (
    <div>{props.children}</div>
  )
}