class TabLink {
   constructor(tabElement){
      
      this.tabElement = tabElement;

      this.data = this.tabElement.dataset.tab;

      this.cards = document.querySelectorAll(`.card[data-tab="${this.data}"`);

      
      this.cards = Array.from(this.cards).map(card => new TabCard(card));

      this.tabElement.addEventListener('click', () => this.selectTab());
   }

   selectTab(){

      const tabs = document.querySelectorAll('.tab');
      
      tabs.forEach(tab => tab.classList.remove('active-tab'));

      const cards = document.querySelectorAll('.card');

      cards.forEach(card => card.style.display = 'none');
      
      this.tabElement.classList.add('active-tab');


      this.cards.forEach(card => card.selectCard());
   }
}

class TabCard {
   constructor(cardElement){
      this.cardElement = cardElement;
   }
   selectCard(){
      this.cardElement.style.display = 'flex';
   }
  
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab){
   return new TabLink(tab);
})
