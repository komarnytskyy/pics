import React from 'react';

class ImageCard extends React.Component<any, any> {
  private readonly imageRef: React.RefObject<unknown>;

  constructor(props: any) {
    super(props);
    this.state = { spans: 0 }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // @ts-ignore
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    // @ts-ignore
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          // @ts-ignore
          ref={this.imageRef}
          src={urls.regular}
          alt={description}/>
      </div>
    );
  }
}

export default ImageCard;
