import React, { useState } from 'react'
import { Picture, Source, Loading } from './styles'

export interface P {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  circle?: boolean;
}

const loadedStack = {}

function Image ({ src, alt = '', ...attrs }: P) {
  const [loaded, setLoaded] = useState(loadedStack[src] || false)

  const onLoad = () => {
    setLoaded(true)
    loadedStack[src] = true
  }

  return (
    <Picture>
      {/* <source srcSet='[hash].webp' type='image/webp' /> */}
      {loaded || <Loading>Loading...</Loading>}
      <Source
        {...attrs}
        src={src}
        alt={alt}
        onLoad={onLoad}
      />
    </Picture>
  )
}

export default Image

// export default ImageLoader;

// class IronImage extends Component {

//   constructor(props) {
//     super(props);
//     this.ironImageHd = null;
//   }

//   componentDidMount() {

//     const hdLoaderImg = new Image();

//     hdLoaderImg.src = this.props.srcLoaded;

//     hdLoaderImg.onload = () => {
//       this.ironImageHd.setAttribute(
//         'style',
//         `background-image: url('${this.props.srcLoaded}')`
//       );
//       this.ironImageHd.classList.add('iron-image-fade-in');
//     }

//   };

//   render() {
//     return (
//       <div className='iron-image-container'>

//         <div
//           className='iron-image-loaded'
//           ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}>
//         </div>
//         <div
//           className='iron-image-preload'
//           style={{ backgroundImage: `url('${this.props.srcPreload}')` }}>
//         </div>

//       </div>
//     )
//   }

// }

// export default IronImage;
