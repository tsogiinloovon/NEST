import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummery";
const INGRDIENTS_PRICE = { salad: 150, cheese: 250, becon: 800, meat: 1500 };
const INGRDIENTS_NAMES = {
  becon: "Гахайн мах",
  cheese: "Бяслага",
  meat: "Үхний мах",
  salad: "Салад",
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      becon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasing: false,
    confirmOrder: false,
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  ortsNemeh = (type) => {
    const NewIngredients = { ...this.state.ingredients };
    NewIngredients[type]++;
    const NewPrice = this.state.totalPrice + INGRDIENTS_PRICE[type];
    this.setState({
      purchasing: NewPrice > 0,
      ingredients: NewIngredients,
      totalPrice: NewPrice,
    });
  };
  ortsHasah = (type) => {
    const NewIngredients = { ...this.state.ingredients };
    NewIngredients[type]--;
    const NewPrice = this.state.totalPrice - INGRDIENTS_PRICE[type];
    this.setState({
      purchasing: NewPrice > 0,
      ingredients: NewIngredients,
      totalPrice: NewPrice,
    });
  };

  continueOrder=()=>{
    console.log('continue daragdlaa');
  }
  render() {
    const disabledIngrdients = { ...this.state.ingredients };

    for (let key in disabledIngrdients) {
      disabledIngrdients[key] = disabledIngrdients[key] <= 0;
    }

    return (
      <div>
        <Modal
          show={this.state.confirmOrder}
        >
          <OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue = {this.continueOrder}
            ingredientsNames={INGRDIENTS_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          closeConfirmModal={this.closeConfirmModal}
          ingredientsNames={INGRDIENTS_NAMES}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngrdients={disabledIngrdients}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
      </div>
    );
  }
}
export default BurgerBuilder;
