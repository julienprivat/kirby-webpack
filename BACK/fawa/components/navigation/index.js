import { navigationData } from "../../assets/data/navigationData"
import Item from "./item"
import ItemLink from "./itemLink"

const Navigation = ({ count, infos, setCount }) => {

    const itemSelect = navigationData.find((e) => count == e.index)

    return <nav className="navigation">
        <div className='parts'>
            {navigationData.map((item, index) => {
                return <Item 
                item={item} 
                count={count} 
                index= {index}
                setCount={setCount}
                key={`item_navigation-${index}-${item.name}`} />
            })}
        </div>

        <div className='links'>
            <ItemLink
            color={itemSelect.color}
            back={itemSelect.back}
            label='11 bis Place Auguste Baron, 75019 Paris'
            link={false}
            />
            <ItemLink
            color={itemSelect.color}
            back={itemSelect.back}
            label='IG'
            link={infos.instagram}
            />
            <ItemLink
            color={itemSelect.color}
            back={itemSelect.back}
            label='FB'
            link={infos.facebook}
            />
        </div>
    </nav>

}
export default Navigation