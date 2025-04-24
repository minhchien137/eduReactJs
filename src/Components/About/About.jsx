import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
            <img src= {about_img} alt="" className='about-img'  />
            <img src= {play_icon} alt="" className='play-icon' />
      </div>

      <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow</h2>
            <p>
        Trường Đại học Công nghệ XYZ là một trong những cơ sở giáo dục hàng đầu tại Việt Nam, nổi bật với chương trình đào tạo tiên tiến và
         đội ngũ giảng viên giàu kinh nghiệm. Với sứ mệnh đào tạo nguồn nhân lực chất lượng cao, nhà trường luôn không ngừng đổi mới phương 
         pháp giảng dạy, chú trọng thực hành và kết nối với doanh nghiệp. Sinh viên tại đây không chỉ được học kiến thức chuyên môn mà còn 
         được phát triển toàn diện các kỹ năng mềm, tư duy sáng tạo và khả năng thích nghi với môi trường làm việc hiện đại.
            </p>

            <p>
        Với khuôn viên rộng rãi, hiện đại và xanh mát, Trường Đại học Công nghệ XYZ mang đến cho sinh viên một môi trường học tập lý tưởng. 
        Các phòng học được trang bị thiết bị giảng dạy tiên tiến, thư viện điện tử hiện đại cùng hệ thống phòng thí nghiệm đạt chuẩn quốc tế, 
        giúp sinh viên có thể tiếp cận và thực hành kiến thức một cách hiệu quả. Ngoài ra, khu ký túc xá và khu thể thao đa năng cũng góp phần 
        tạo nên đời sống sinh viên năng động và đầy đủ tiện nghi.
            </p>


     </div>

    </div>
  )
}

export default About
