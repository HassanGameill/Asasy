import SectionTitle from '@/components/Common/SectionTitle/SectionTitle'
import React from 'react'
import PakegesRender from './PakegesRender'

function Pakege() {
  return (
    <>
        <section id="partners" className="py-5">
          <div className="container">
            <SectionTitle
              title="Our Pakges"
              paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center
            />
  
            <div className="flex flex-col gap-8">
                <PakegesRender />
              
            </div>

            
          </div>
        </section>
      </>
  )
}

export default Pakege