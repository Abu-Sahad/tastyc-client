import Cover from '../../../Shared/Cover/Cover';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
const Pizza = () => {
    return (
        <div>
            <Cover
                img={pizzaImg}
                tittle='Pizza'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, nam. Veritatis quam ab asperiores autem!'
            ></Cover>
        </div>
    );
};

export default Pizza;