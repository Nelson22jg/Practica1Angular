import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule]
})
export class EmpleadosComponent {
  empleadoForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.empleadoForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      office: ['', Validators.required],
      age: ['', Validators.required],
      start_date: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.empleadoForm.valid) {
      this.dataService.saveEmpleado(this.empleadoForm.value).subscribe(response => {
        console.log('Empleado guardado exitosamente', response);
      }, error => {
        console.error('Error al guardar el empleado', error);
      });
    }
  }
}
