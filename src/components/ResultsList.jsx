const ResultsList = ({data}) => {
    return(
        <div>
            {
                data !== [] && data.map((item) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <img src={item.image} alt={item.title} />
                    </div>
                ))
            }
        </div>
    )
}

export default ResultsList;