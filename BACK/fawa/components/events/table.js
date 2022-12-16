import TableLine from "./tableLine"

const Table = ({ table }) => {

    console.log(table)

    return <div className='event_table'>
        <h3 style= {{
            color: table.color,
            marginBottom: '25px'
        }}>
            Programme des événements à venir
        </h3>
        <div 
        className='event_table_line legend'
        style= {{
            color: table.color,
            borderTop: `1px solid ${table.color}`,
            borderBottom: `1px solid ${table.color}`,
        }}>
            <div>Date</div>
            <div>Horaires</div>
            <div>Evenements</div>
            <div>Nom</div>
            <div>Prix</div>
        </div>
        {table.table_content.map((line) => {
            return <TableLine 
            key={line.name + line.horaire} 
            color={table.color} 
            back= {table.back}
            line={line} />
        })}
    </div>

}
export default Table