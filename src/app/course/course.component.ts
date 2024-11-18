import {
	ActivatedRoute,
	Router,
	RouterModule
}
from '@angular/router';
import {
	Component,
	OnChanges,
	OnInit,
	SimpleChanges
}
from '@angular/core';
import {
	Course
}
from '../models/course';
import {
	CommonModule
}
from '@angular/common';
import {
	BehaviorSubject,
	Observable
}
from 'rxjs';@Component({
	selector: 'app-course',
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: './course.component.html',
	styleUrl: './course.component.css',
}) export class CourseComponent implements OnInit {
	private coursesSubject: BehaviorSubject < Course[] > =new BehaviorSubject([] as any);
	data$: Observable < Course[] > =this.coursesSubject.asObservable();
	constructor(private activatedRoute: ActivatedRoute, private router: Router) {
		this.coursesSubject.subscribe((value) = >console.log('Subject Subscriber 1:', value));
	}
	ngOnInit() : void {
		this.activatedRoute.params.subscribe((params) = >{
			const id = params['id'];
			const list = this.courses.filter((course) = >course.idCategory === Number(id));
			this.coursesSubject.next(list);
		});
	}
	courses: Course[] = [{
		id: 1,
		idCategory: 1,
		title: 'Java para iniciantes',
		description: 'Aprenda Java de forma fácil: váriaveis, constantes, funções,
etc',
		cost: 100,
		image: 'https://hermes.dio.me/articles/cover/d4c42a23-7115-48c5-ae7a-1f2537000
3e1.png',
		duration: '10 meses',
	},
	...];
}
