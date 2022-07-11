import { PurchaseData } from "@/types/PurchaseData";
import { SelectOption } from "@/types/SelectOption";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true })
class StickersStore extends VuexModule {
  public purchaseData: PurchaseData = {
    checkedStickers: [],
    stickersQuantity: 0,
    comments: "",
    paymentMethod: null,
  };

  @Mutation
  public setCheckedStickers(checkedStickers: string[]) {
    this.purchaseData.checkedStickers = checkedStickers;
  }

  @Mutation
  public setStickersQuantity(stickersQuantity: number) {
    this.purchaseData.stickersQuantity = stickersQuantity;
  }

  @Mutation
  public setComments(comments: string) {
    this.purchaseData.comments = comments;
  }

  @Mutation
  public setPaymentMethod(paymentMethod: SelectOption | null) {
    this.purchaseData.paymentMethod = paymentMethod;
  }

  @Mutation
  public resetStore() {
    this.purchaseData = {
      checkedStickers: [],
      stickersQuantity: 0,
      comments: "",
      paymentMethod: null,
    };
  }

  get purchase(): PurchaseData {
    return this.purchaseData;
  }
}

export default StickersStore;
