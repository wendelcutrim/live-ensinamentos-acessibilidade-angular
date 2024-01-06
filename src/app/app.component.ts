import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('titleH1') titleH1!: ElementRef<HTMLHeadingElement>;

    title = 'estudos-acessibilidade';
    pageTitle: string = 'Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE, 8GB GDDR6, Preto - GV-R66EAGLE-8GD';
    tabIndex: number = 1;

    // arrowUp: string = 'expand_more';
    // arrowDown: string = 'expand_less'

    arrowIcon: string = 'expand_more';
    expandAccordion: boolean = false;
    amountProducts: number = 0;

    message: string = '';
    showAy11Alert: boolean = false;

    productImg: string =
        'https://images.kabum.com.br/produtos/fotos/246836/placa-de-video-gigabyte-radeon-rx-6600-eagle-8gb-gddr6-preto-gv-r66eagle-8gd_1634155420_gg.jpg';

    ngOnInit(): void {
        this.focusTitleH1();
    }

    focusTitleH1() {
        this.titleH1.nativeElement.focus();
    }

    resetTabIndex() {
        this.tabIndex = -1;
    }

    toggleAccordion() {
        this.expandAccordion = !this.expandAccordion;
        this.arrowIcon = this.expandAccordion ? 'expand_less' : 'expand_more';
    }

    increaseAmountProducts() {
        this.amountProducts++;

        this.showAy11Alert = true;
        this.message = `Produto adicionado ao carrinho!, Quantidade de itens: ${this.amountProducts}`;
    }

    decreaseAmountProducts() {
        if (this.amountProducts > 0) {
            this.amountProducts--;
            this.showAy11Alert = true;
            this.message = `Produto removido do carrinho!, Quantidade de itens: ${this.amountProducts}`;
        }
    }
}
