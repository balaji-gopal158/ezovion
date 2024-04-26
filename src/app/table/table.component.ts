import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort'
import {MatTableDataSource} from '@angular/material/table'
import { FormArray,FormBuilder,FormControl,FormControlName,FormGroup,NgForm,Validators } from '@angular/forms';

interface Product {
  id:string;
  name: string;
  catagory:string;
  fullprice: string;
  salesprice:string
  availability: string;
  supplier:string
  discount:string
  disabled: boolean;
  invalid:boolean
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products:Product[] = [
    {
    name: 'Engine Nano Part', catagory: 'Engine Part', fullprice: '10.20', disabled: true,
    id: '1',
    salesprice: '9.50',
    availability: 'Instock',
    supplier: 'TVS',
    discount: '10%',
    invalid: false
  }
,{
  name: 'House Hold', catagory: 'Otherspares', fullprice: '10.20', disabled: true,
  id: '2',
  salesprice: '9.50',
  availability: 'Instock',
  supplier: 'TVS',
  discount: '10%',
  invalid: false
},{
  name: 'Electrical', catagory: 'Elctricalpart', fullprice: '10.20', disabled: true,
  id:  '3',
  salesprice: '9.50',
  availability: 'Instock',
  supplier: 'Axelindia',
  discount: '10%',
  invalid: false
},{
  name: 'Emission Control', catagory: 'Emissioncntrlparts', fullprice: '10.20', disabled: true,
  id:  '4',
  salesprice: '9.50',
  availability: 'Instock',
  supplier: 'Hyndai',
  discount: '10%',
  invalid: false
},
{name: 'Lubricants', catagory: 'Lubricantparts', fullprice: '10.20', disabled: true,
  id:  '5',
  salesprice: '9.50',
  availability: 'Instock',
  supplier: 'Carcare',
  discount: '10%',
  invalid: false},{
    name: 'Micro Parts', catagory: 'Nanopart', fullprice:'10.20', disabled: true,
  id: '6',
  salesprice: '9.50',
  availability: 'Instock',
  supplier: 'Carcare',
  discount: '10%',
  invalid: false
  },{
    name: 'Others', catagory: 'Engine Part', fullprice: '10.20', disabled: true,
    id: '7',
    salesprice: '9.50',
    availability: 'Instock',
    supplier: 'Honda',
    discount: '10%',
    invalid: false
  },{
    name: 'Mechanical Parts', catagory: 'Engine Part', fullprice: '10.20', disabled: true,
    id: '8',
    salesprice: '9.50',
    availability: 'Instock',
    supplier: 'TVS',
    discount: '10%',
    invalid: false
  },{
    name: 'Electrical Parts', catagory: 'Engine Part', fullprice: '10.20', disabled: true,
    id: '9',
    salesprice: '9.50',
    availability: 'Instock',
    supplier: 'Axelindia',
    discount: '10%',
    invalid: false
  },{
    name: 'Others', catagory: 'Otherspares', fullprice: '10.20', disabled: true,
    id: '10',
    salesprice: '9.50',
    availability: 'Instock',
    supplier: 'Axelindia',
    discount: '10%',
    invalid: false
  }];

  
  reverseId:boolean=false
  reverseName: boolean = false;
  reverseCatagory:boolean=false
  reverseFullPrice: boolean = false;
  reverSalesPrice: boolean = false;
  reverseAvailability: boolean = false;
  reverseSupplier: boolean = false;
  reverseDiscount: boolean = false;
  product: Product;
  

  
  constructor() { }

   ngOnInit(): void {
   
  }

  
  addProduct() {
    this.products.push({
      name: '', catagory: '', fullprice: '', disabled: false,
      id: '',
      salesprice: '',
      availability: '',
      supplier: '',
      discount:'' ,
      invalid:false
    });
    
    console.log(this.products)
    const jsonData = JSON.stringify(this.products);
    console.log(jsonData)
    const storage=localStorage.setItem('Values',jsonData)
    const storedJsonString = localStorage.getItem('Values');
   const storedObject:Product=JSON.parse(storedJsonString)
    console.log(storedObject)
  
  }


  toggleEdit(product: Product) {
    product.disabled = !product.disabled;
    
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  sort(field: string) {
    switch (field) {
      case 'id':
        this.products.sort((a:any, b:any) => (this.reverseId ? 1 : -1) * (a.id - b.id));
        this.reverseId = !this.reverseId;
        break;
      case 'name':
        this.products.sort((a:any, b:any) => (this.reverseName ? 1 : -1) * a.name.localeCompare(b.name));
        this.reverseName = !this.reverseName;
        break;
        case 'catagory':
          this.products.sort((a:any, b:any) => (this.reverseCatagory ? 1 : -1) * a.catagory.localeCompare(b.catagory));
          this.reverseCatagory = !this.reverseCatagory;
          break;
      case 'fullprice':
        this.products.sort((a:any, b:any) => (this.reverseFullPrice ? 1 : -1) * (a.fullprice - b.fullprice));
        this.reverseFullPrice = !this.reverseFullPrice;
        break;
      case 'salesprice':
        this.products.sort((a:any, b:any) => (this.reverSalesPrice ? 1 : -1) * (a.salesprice - b.salesprice));
        this.reverSalesPrice = !this.reverSalesPrice;
        break;
        case 'availability':
          this.products.sort((a:any, b:any) => (this.reverseAvailability ? 1 : -1) * a.availability.localeCompare(b.availability));
          this.reverseAvailability = !this.reverseAvailability;
          break;
           case 'supplier':
          this.products.sort((a:any, b:any) => (this.reverseSupplier ? 1 : -1) * a.supplier.localeCompare(b.supplier));
          this.reverseSupplier = !this.reverseSupplier;
          break;
            case 'discount':
            this.products.sort((a:any, b:any) => (this.reverseDiscount ? 1 : -1) * (a.discount - b.discount));
            this.reverseDiscount = !this.reverseDiscount;
            break;
    }
  }

 
 
}
  

