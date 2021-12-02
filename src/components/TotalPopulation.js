const TotalPopulation = ({populations}) => {
    const totalPopulation = populations.reduce((acc, current) => acc+current, populations[0]);
    return <h2>Population of Earth: {totalPopulation}</h2>;
}

export default TotalPopulation;