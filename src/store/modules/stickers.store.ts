import { SelectOption } from "@/types/SelectOption";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true })
class StickersStore extends VuexModule {
  public checkedStickers: string[] = [];
  public stickersQuantity = 0;
  public comments = "";
  public paymentMethod: SelectOption | null = null;

  @Mutation
  public setCheckedStickers(checkedStickers: string[]) {
    this.checkedStickers = checkedStickers;
  }

  @Mutation
  public setStickersQuantity(stickersQuantity: number) {
    this.stickersQuantity = stickersQuantity;
  }

  @Mutation
  public setComments(comments: string) {
    this.comments = comments;
  }

  @Mutation
  public setPaymentMethod(paymentMethod: SelectOption | null) {
    this.paymentMethod = paymentMethod;
  }
}

export default StickersStore;
