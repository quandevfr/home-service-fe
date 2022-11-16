import React from 'react';
import helpFunction from 'src/utils/help';

import './About.scss';

const About = () => {
  helpFunction.useScrollToTop();
  return (
    <div className='about'>
      <div className='aboutWrap'>
        <h3 className='aboutPageTitle'>Home Services là gì?</h3>
        <div className='aboutPageItem'>
          <p className='aboutPageItemTitle'>Là đơn vị kinh doanh với nhiều các dịch vụ chính như:</p>
          <ul>
            <li>Dọn dẹp nhà cửa.</li>
            <li>Vận chuyển nhà.</li>
            <li>Sửa chữa các thiết bị điện gia dụng trong gia đình.</li>
          </ul>
        </div>

        <h3 className='aboutPageTitle'>Hành trình chinh phục</h3>
        <div className='aboutPageItem'>
          <p className='aboutPageItemDesc'>
            Ngày nay, sự phát triển nhanh chóng của xã hội, hiện đại hoá, công nghiệp hoá là xu hướng tất yếu. Tuy
            nhiên, điều đó là khiến môi trường sống của chúng ta bị ảnh hưởng và ngày càng bị đe doạ. Xuất phát từ những
            trăn trở tạo nên môi trường sống và làm việc Xanh - Sạch - Trong lành, Home Services ra đời
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
