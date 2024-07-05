
module.exports = (qualifiedRM, formData) => {
    qualifiedRM.forEach(element => {
        element["Discount Incentive"] = 0;
        let userValue = element["Discount"];
        const TotalVehicleIncentive = element["Total PerCar Incentive"] + element['SpecialCar Incentive']
        for (const incentive of formData.DiscountInputs) {
            //soon scenario
            if (incentive.max === null) {
                if (userValue >= incentive.min) {
                    element["Discount Incentive"] = (TotalVehicleIncentive * incentive.incentive) / 100;
                    break;
                }
            } else {
                if (userValue >= incentive.min && userValue < incentive.max) {
                    element["Discount Incentive"] = (TotalVehicleIncentive * incentive.incentive) / 100;
                    break;
                }
            }
        }
        console.log(`element["Discount Incentive"]`);
        console.log(element["Discount Incentive"]);

    });
    return qualifiedRM;
}