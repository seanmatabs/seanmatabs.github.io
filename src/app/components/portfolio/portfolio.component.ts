import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PortfolioItemComponent} from '../../dialogs/portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items = [
    {
      id: 1,
      images: ['assets/images/portfolio/coffee.jpg'],
      title: 'Radix Bank',
      type: 'Banking Platform',
      description: ''
    },
    {
      id: 2,
      images: ['assets/images/portfolio/coffee.jpg'],
      title: 'Injozi Assessment',
      type: 'Web Application',
      description: ''
    }
  ];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  viewJob(content) {
    const modalRef = this.modalService.open(PortfolioItemComponent);
    modalRef.componentInstance.item = content;
  }
}
