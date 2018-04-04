export default (portfolios, { text, sortBy, startDate, endDate }) => {
    return portfolios.filter((portfolio) => {
        const startDateMatch = typeof startDate !== 'number' || portfolio.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || portfolio.createdAt <= endDate;
        const textMatch = portfolio.portfolio_description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; //most recent first
        } else if (sortBy === 'category') {
            return a.category > b.category ? 1 : -1 // alphabetically
        }
    });
};