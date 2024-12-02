import CalorieImg from '../../assets/calories-icon.png'
import ProteineImg from '../../assets/protein-icon.png'
import GlucideImg from '../../assets/carbs-icon.png'
import LipidesImg from '../../assets/fat-icon.png'

function CardAside (props) {
    return (
      <aside className="flex flex-col gap-5 ">
            {props.helth.map((user) => {
                if (user.id === parseInt(props.id)) {
                    return (
                        <>
                            <div className="text-black bg-color-card p-5 w-full flex flex-row flex-nowrap items-center gap-6">
                                <img className="w-12" src={CalorieImg} alt="Logo" />
                                <div>
                                    <p className='font-medium'>{user.keyData.calorieCount}kCal</p>
                                    <p className='text-xs'>Calories</p>
                                </div>
                            </div>
                            <div className="text-black bg-color-card p-4 flex flex-row flex-nowrap items-center gap-6">
                                <img className="w-12" src={ProteineImg} alt="Logo" />
                                <div>
                                    <p className='font-medium'>{user.keyData.proteinCount}g</p>
                                    <p className='text-xs'>Proteines</p>
                                </div>
                            </div>
                            <div className="text-black bg-color-card p-4 flex flex-row flex-nowrap items-center gap-6">
                                <img className="w-12" src={GlucideImg} alt="Logo" />
                                <div>
                                    <p className='font-medium'>{user.keyData.carbohydrateCount}g</p>
                                    <p className='text-xs'>Glucides</p>
                                </div>
                            </div>
                            <div className="text-black bg-color-card p-4 flex flex-row flex-nowrap items-center gap-6">
                                <img className="w-12" src={LipidesImg} alt="Logo" />
                                <div>
                                    <p className='font-medium'>{user.keyData.lipidCount}g</p>
                                    <p className='text-xs'>Lipides</p>
                                </div>
                            </div>
                        </>
                    );
                }
                return null;
            })}
      </aside>
    );
  }
  
  export default CardAside;