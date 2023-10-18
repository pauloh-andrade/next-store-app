import Image from 'next/image'
import React from 'react'

 const NotFound = () => {
  return (
    <div>
        <h1>OOPS! 404</h1>
        <p>!Not Found</p>
        <div>
            <Image
                src="https://www.otempo.com.br/polopoly_fs/1.1040880.1534205542!httpImage/image.jpg_gen/derivatives/hard-news-img-medium-fit_380/image.jpg" 
                alt="404" 
                width={500} 
                height={500}
            />
        </div>
    </div>
  )
}

export default NotFound