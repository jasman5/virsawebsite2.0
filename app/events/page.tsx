// import React from 'react'
// import App_Navbar from '../components/navbar'
// import ImageSlider from '../components/ImageSlider'
// import { FooterSection } from '../components/footer-section'

// const Event = () => {
//   return (
//     <div className="min-h-screen">
//       <App_Navbar />
//       <div >
//         <ImageSlider />
//       </div>
//       <FooterSection />
//     </div>
//   )
// }

// export default Event

import React, { Suspense } from 'react'
import App_Navbar from '../components/navbar'
import ImageSlider from '../components/ImageSlider'
import { FooterSection } from '../components/footer-section'

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
)

const Event = () => {
  return (
    <div className="min-h-screen">
      <App_Navbar />
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <ImageSlider />
        </Suspense>
      </div>
      <FooterSection />
    </div>
  )
}

export default Event