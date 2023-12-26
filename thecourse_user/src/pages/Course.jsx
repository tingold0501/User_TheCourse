/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderChild from '../component/HeaderChild'
import CourseItem from '../component/CourseItem'
import FavouriteCourse from '../component/FavouriteCourse'
import Recommended from '../component/Recommended'
import Footer from '../component/Footer'
function Course() {
  return (
    <div>
        <HeaderChild/>
        <CourseItem/>
        <FavouriteCourse/>
        <Recommended/>
        <Footer/>
    </div>
  )
}

export default Course