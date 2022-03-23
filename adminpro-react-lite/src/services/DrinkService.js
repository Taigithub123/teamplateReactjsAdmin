import axios from 'axios';

const OrderDrink_API_BASE_URL = "http://localhost:8080/api/v1/categoryDrink";

class DrinkService {

    getOderDrink() {
        return axios.get(OrderDrink_API_BASE_URL);
    }
    createOrderDrink(Drink) {
        return axios.post(OrderDrink_API_BASE_URL, Drink);
    }
    getCategoryNameById(Drinkid) {
        return axios.get(OrderDrink_API_BASE_URL + '/' + Drinkid);
    }
    updateCatogoryDrink(Drink, Drinkid) {
        return axios.put(OrderDrink_API_BASE_URL + '/' + Drinkid, Drink);
    }

    deleteCatogoryDrink(Drinkid) {
        return axios.delete(OrderDrink_API_BASE_URL + '/' + Drinkid);
    }
}

export default new DrinkService()