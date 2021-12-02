const TotalPopulation = ({populations}) => {
    const totalPopulation = populations.reduce((acc, current) => acc+current, 0);
    return <h2>{totalPopulation}</h2>;
}

export default TotalPopulation;