import IconMeditation from '../../assets/icon_meditation.png'
import IconNage from '../../assets/icon_nage.png'
import IconVelo from '../../assets/icon_velo.png'
import IconMusculation from '../../assets/icon_musculation.png'

function Aside() {
    return(
        <aside className="fixed top-0 left-0 flex flex-col items-center p-6 bg-black w-28 h-full">
            <div className='flex flex-col align-middle m-auto gap-3'>
            <img className="w-16 h-16" src={IconMeditation} alt="Logo" />
            <img className="w-16 h-16" src={IconNage} alt="Logo" />
            <img className="w-16 h-16" src={IconVelo} alt="Logo" />
            <img className="w-16 h-16" src={IconMusculation} alt="Logo" />
            </div>
            <p className='text-white absolute w-max text-xs bottom-20 -rotate-90'>Copiryght, SportSee 2020</p>
      </aside>
    )
}
export default Aside