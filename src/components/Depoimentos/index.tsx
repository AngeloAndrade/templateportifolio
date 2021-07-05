import { Container, Content } from './styles';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Angelo1 from '../../assets/Angelo1.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Depoimentos() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <h1 id="depoimentos">Depoimentos</h1>
      <Swiper
        spaceBetween={-400}
        slidesPerView={2}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Content data-aos="flip-up" data-aos-delay="5000">
            <img src={Angelo1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
              sint! Dignissimos aliquid hic deserunt cum accusantium
              consectetur, dolor tempore dicta odio corporis aperiam, at nostrum
              fuga, blanditiis alias dolorum aspernatur?
            </p>

            <strong>Angelo Andrade</strong>
            <br />
            <span>CEO, angels</span>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content data-aos="flip-up" data-aos-duration="5000">
            <img src={Angelo1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
              sint! Dignissimos aliquid hic deserunt cum accusantium
              consectetur, dolor tempore dicta odio corporis aperiam, at nostrum
              fuga, blanditiis alias dolorum aspernatur?
            </p>

            <strong>Angelo Andrade</strong>
            <br />
            <span>CEO, angels</span>
          </Content>
        </SwiperSlide>

        <SwiperSlide>
          <Content data-aos="flip-up" data-aos-delay="5000">
            <img src={Angelo1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
              sint! Dignissimos aliquid hic deserunt cum accusantium
              consectetur, dolor tempore dicta odio corporis aperiam, at nostrum
              fuga, blanditiis alias dolorum aspernatur?
            </p>

            <strong>Angelo Andrade</strong>
            <br />
            <span>CEO, angels</span>
          </Content>
        </SwiperSlide>

        <SwiperSlide>
          <Content data-aos="flip-up" data-aos-delay="5000">
            <img src={Angelo1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
              sint! Dignissimos aliquid hic deserunt cum accusantium
              consectetur, dolor tempore dicta odio corporis aperiam, at nostrum
              fuga, blanditiis alias dolorum aspernatur?
            </p>

            <strong>Angelo Andrade</strong>
            <br />
            <span>CEO, angels</span>
          </Content>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
