import { ReactComponent as TitleSVG } from '../assets/svg/Title.svg';
import YearImage from '../assets/images/2024.png'

export default function Title() {
  return (
    <div className='title-section' style={{ position: 'relative', width: 'fit-content' }}>
      <TitleSVG />
      <img className='title-2024' src={YearImage} alt="2024" />
    </div>
  )
}