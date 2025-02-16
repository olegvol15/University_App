import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  faculty: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];

  constructor() {
    this.loadStudents();
  }

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  getStudentsByFaculty(facultyName: string): Student[] {
    console.log('Поиск студентов для факультета:', facultyName);
    const foundStudents = this.students.filter(student => student.faculty === facultyName);
    console.log('Найденные студенты:', foundStudents);
    return foundStudents;
  }
  
  
  

  addStudent(student: Student): void {
    student.id = this.generateId();
    this.students.push(student);
    this.saveStudents();
    console.log('Добавлен студент:', student);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
    this.saveStudents();
  }

  private generateId(): number {
    return this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
  }

  private saveStudents(): void {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  private loadStudents(): void {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      this.students = JSON.parse(savedStudents);
    } else {
      this.students = [
        { id: 1, name: 'Иван Петров', email: 'ivan@example.com', phone: '123-456-7890', faculty: 'Финансы' },
        { id: 2, name: 'Анна Соколова', email: 'anna@example.com', phone: '234-567-8901', faculty: 'Финансы' },
        { id: 3, name: 'Дмитрий Иванов', email: 'dmitry@example.com', phone: '345-678-9012', faculty: 'Финансы' },
        { id: 4, name: 'Елена Тихонова', email: 'elena@example.com', phone: '456-789-0123', faculty: 'Финансы' },
        { id: 5, name: 'Сергей Кузнецов', email: 'sergey@example.com', phone: '567-890-1234', faculty: 'Финансы' },
        { id: 6, name: 'Марина Ковалева', email: 'marina@example.com', phone: '678-901-2345', faculty: 'Финансы' },
        { id: 7, name: 'Владимир Орлов', email: 'vladimir@example.com', phone: '789-012-3456', faculty: 'Финансы' },
        { id: 8, name: 'Оксана Зайцева', email: 'oksana@example.com', phone: '890-123-4567', faculty: 'Финансы' },
        { id: 9, name: 'Александр Павлов', email: 'alex@example.com', phone: '901-234-5678', faculty: 'Финансы' },
        { id: 10, name: 'Юлия Белова', email: 'yulia@example.com', phone: '012-345-6789', faculty: 'Финансы' },
    

        { id: 11, name: 'Николай Смирнов', email: 'nikolay@example.com', phone: '123-111-7890', faculty: 'Экономика' },
        { id: 12, name: 'Ольга Романова', email: 'olga@example.com', phone: '234-222-8901', faculty: 'Экономика' },
        { id: 13, name: 'Андрей Егоров', email: 'andrey@example.com', phone: '345-333-9012', faculty: 'Экономика' },
        { id: 14, name: 'Кристина Федорова', email: 'kristina@example.com', phone: '456-444-0123', faculty: 'Экономика' },
        { id: 15, name: 'Василий Борисов', email: 'vasiliy@example.com', phone: '567-555-1234', faculty: 'Экономика' },
        { id: 16, name: 'Татьяна Власова', email: 'tatyana@example.com', phone: '678-666-2345', faculty: 'Экономика' },
        { id: 17, name: 'Евгений Мельников', email: 'evgeniy@example.com', phone: '789-777-3456', faculty: 'Экономика' },
        { id: 18, name: 'Светлана Сидорова', email: 'svetlana@example.com', phone: '890-888-4567', faculty: 'Экономика' },
        { id: 19, name: 'Максим Тимофеев', email: 'maxim@example.com', phone: '901-999-5678', faculty: 'Экономика' },
        { id: 20, name: 'Алина Григорьева', email: 'alina@example.com', phone: '012-000-6789', faculty: 'Экономика' },

        { id: 21, name: 'Артем Козлов', email: 'artem@example.com', phone: '123-456-0000', faculty: 'Маркетинг' },
        { id: 22, name: 'Виктория Семенова', email: 'victoria@example.com', phone: '234-567-1111', faculty: 'Маркетинг' },
        { id: 23, name: 'Константин Панкратов', email: 'konstantin@example.com', phone: '345-678-2222', faculty: 'Маркетинг' },
        { id: 24, name: 'Дарья Афанасьева', email: 'darya@example.com', phone: '456-789-3333', faculty: 'Маркетинг' },
        { id: 25, name: 'Игорь Зуев', email: 'igor@example.com', phone: '567-890-4444', faculty: 'Маркетинг' },
        { id: 26, name: 'Полина Морозова', email: 'polina@example.com', phone: '678-901-5555', faculty: 'Маркетинг' },
        { id: 27, name: 'Роман Баранов', email: 'roman@example.com', phone: '789-012-6666', faculty: 'Маркетинг' },
        { id: 28, name: 'София Воробьева', email: 'sofia@example.com', phone: '890-123-7777', faculty: 'Маркетинг' },
        { id: 29, name: 'Григорий Ершов', email: 'grigory@example.com', phone: '901-234-8888', faculty: 'Маркетинг' },
        { id: 30, name: 'Анна Тарасова', email: 'anna@example.com', phone: '012-345-9999', faculty: 'Маркетинг' },
        
        { id: 31, name: 'Сергей Шестаков', email: 'sergey@example.com', phone: '123-456-1010', faculty: 'Право' },
        { id: 32, name: 'Екатерина Мартынова', email: 'ekaterina@example.com', phone: '234-567-2020', faculty: 'Право' },
        { id: 33, name: 'Александр Кириллов', email: 'alexander@example.com', phone: '345-678-3030', faculty: 'Право' },
        { id: 34, name: 'Наталья Щербакова', email: 'natalya@example.com', phone: '456-789-4040', faculty: 'Право' },
        { id: 35, name: 'Павел Лебедев', email: 'pavel@example.com', phone: '567-890-5050', faculty: 'Право' },
        { id: 36, name: 'Лариса Гаврилова', email: 'larisa@example.com', phone: '678-901-6060', faculty: 'Право' },
        { id: 37, name: 'Станислав Логинов', email: 'stanislav@example.com', phone: '789-012-7070', faculty: 'Право' },
        { id: 38, name: 'Елена Яковлева', email: 'elena@example.com', phone: '890-123-8080', faculty: 'Право' },
        { id: 39, name: 'Андрей Колесников', email: 'andrey@example.com', phone: '901-234-9090', faculty: 'Право' },
        { id: 40, name: 'Виктория Смолина', email: 'victoria@example.com', phone: '012-345-0000', faculty: 'Право' }
      ];
      this.saveStudents(); // Сохранение начальных данных в localStorage
    }
  }
}








