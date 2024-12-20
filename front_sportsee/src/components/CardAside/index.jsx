import CalorieImg from '../../assets/calories-icon.png'
import ProteineImg from '../../assets/protein-icon.png'
import GlucideImg from '../../assets/carbs-icon.png'
import LipidesImg from '../../assets/fat-icon.png'

function CardAside (props) {
    return (
      <div className="flex flex-col flex-nowrap justify-between w-aside_w">
            
        <div className="text-black bg-color-card p-5 w-full flex flex-row flex-nowrap items-center gap-4 rounded-md">
            <img className="w-16" src={CalorieImg} alt="Logo" />
            <div>
                <p className='font-medium'>{props.helth.keyData.calorieCount}kCal</p>
                <p className='text-xs'>Calories</p>
            </div>
        </div>
        <div className="text-black bg-color-card p-4 flex flex-row flex-nowrap items-center gap-4 rounded-md">
            <img className="w-16" src={ProteineImg} alt="Logo" />
            <div>
                <p className='font-medium'>{props.helth.keyData.proteinCount}g</p>
                <p className='text-xs'>Proteines</p>
            </div>
        </div>
        <div className="text-black bg-color-card p-4 flex flex-row flex-nowrap items-center gap-4 rounded-md">
            <img className="w-16" src={GlucideImg} alt="Logo" />
            <div>
                <p className='font-medium'>{props.helth.keyData.carbohydrateCount}g</p>
                <p className='text-xs'>Glucides</p>
            </div>
        </div>
        <div className="text-black bg-color-card p-4 flex flex-row flex-nowrap items-center gap-4 rounded-md">
            <img className="w-16" src={LipidesImg} alt="Logo" />
            <div>
                <p className='font-medium'>{props.helth.keyData.lipidCount}g</p>
                <p className='text-xs'>Lipides</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default CardAside;