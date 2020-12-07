import {Injectable} from '@angular/core';
import {LaboratoryInterface} from '../interfaces/laboratory.interface';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  public labs = [
    {
      labId: 0,
      titleOfLab: 'Учебный класс промышленных сетевых технологий и интернета вещей.',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: 'Лаборатория автоматизированного проектирования\n' +
            'используется в образовательном\n' +
            'процессе кафедры интеллектуальных систем для проведения специализированных лабораторных\n' +
            'практикумов, а также для подготовки курсовых\n' +
            ',\n' +
            'дипломных\n' +
            'и магистерских\n' +
            'работ.\n', image: '/assets/images/network_pic(1).jpeg'
        },
        {
          id: 1, description: '\n' +
            'Лаборатория автоматизированного проектирования\n' +
            'Лаборатория автоматизированного проектирования\n' +
            'используется в образовательном\n' +
            'процессе кафедры интеллектуальных систем для проведения специализированных лабораторных\n' +
            'практикумов, а также для подготовки курсовых\n' +
            ',\n' +
            'дипломных\n' +
            'и магистерских\n' +
            'работ.\n' +
            'Учебный класс на базе лаборатории укомплектован\n' +
            'компь\n' +
            'ютерными системами\n' +
            ',\n' +
            'учебными\n' +
            'радиотехническими модулями\n' +
            'ARM\n' +
            ',\n' +
            'измерительным оборудованием\n' +
            'Alma\n' +
            'Me\n' +
            'ter\n' +
            ',\n' +
            'учебными и\n' +
            'демонстрационными наборами на базе микроконтроллерных плат\n' +
            'Arduino\n' +
            'Mega\n' +
            '260,\n' +
            'наборами\n' +
            'различных датчиков и плат расширения, в том числе\n' +
            'для сете\n' +
            'вых интерфейсов\n' +
            '.', image: '/assets/images/network_pic(2).jpeg'
        }, {
          id: 2, description: '\n' +
            'Лаборатория оснащена современным лицензионным программным обеспечением\n' +
            'Cadence\n' +
            'и\n' +
            'Altium\n' +
            'Designer\n' +
            '.\n' +
            'Проводятся авторские курсы по работе с данными системами.', image: '/assets/images/network_pic(3).jpeg'
        }
      ]
    }, {
      labId: 1,
      titleOfLab: 'Учебный класс автоматизированного проектироавния',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: 'Лаборатория\n' +
            'глубокого обучения\n' +
            'используется в образовательном процессе кафедры\n' +
            'радиофизки и цифровых медиа технологий\n' +
            'для проведения специализированных лабораторных\n' +
            'практикумов, а также для подготовки курсовых\n' +
            ',\n' +
            'дипломных\n' +
            'и магистерских\n' +
            'работ.', image: '/assets/images/network_pic(1).jpeg'
        },
        {
          id: 1,
          description: 'Учебный класс на базе лаборатории имеет 17 рабочих мест.',
          image: '/assets/images/network_pic(2).jpeg'
        },
        {
          id: 2, description: 'В рамках лаборатории\n' +
            'глубокого\n' +
            'обучения\n' +
            'ведутся научные исследования и обучение по\n' +
            'следующим направлениям:\n' +
            '\n' +
            'Нейронные сети\n' +
            '\n' +
            'Методы глубокого обучения\n' +
            '\n' +
            'Прием и обработка аудио и в\n' +
            'идео сигналов\n' +
            '\n' +
            'Ц\n' +
            'ифров\n' +
            'ая\n' +
            'обработк\n' +
            'а сигналов', image: '/assets/images/network_pic(3).jpeg'
        }
      ]
    },
    {
      labId: 2,
      titleOfLab: 'Учебный класс глубокого машинного обучения.',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: 'Лаборатория\n' +
            'промышленных сетей и интернета вещей\n' +
            'используется в образовательном\n' +
            'процессе кафедры\n' +
            'т\n' +
            'елекоммуникаций и информационных технологий\n' +
            'для проведения\n' +
            'специализированных лабораторных практикумов, а также для подготовки курсовых\n' +
            ',\n' +
            'дипломных\n' +
            'и\n' +
            'магистерских\n' +
            'работ.', image: '/assets/images/machine_lab(1).jpg'
        },
        {
          id: 1, description: '\n' +
            'Лаборатория\n' +
            'промышленных сетей и интернета вещей\n' +
            'Лаборатория\n' +
            'промышленных сетей и интернета вещей\n' +
            'используется в образовательном\n' +
            'процессе кафедры\n' +
            'т\n' +
            'елекоммуникаций и информационных технологий\n' +
            'для проведения\n' +
            'специализированных лабораторных практикумов, а также для подготовки курсовых\n' +
            ',\n' +
            'дипломных\n' +
            'и\n' +
            'магистерских\n' +
            'работ.\n' +
            'Учебный класс на базе лаборатории\n' +
            'оборудован\n' +
            'комплексом аппаратно\n' +
            '-\n' +
            'программных средств на\n' +
            'базе многопользовательских компьютерных\n' +
            'систем\n' +
            ',\n' +
            'учебно\n' +
            '-\n' +
            'исследовательским комплексом для\n' +
            'изучения промышленных сетей, промышленных компьютеров, промышленных контроллеров,\n' +
            'промышленного интернета вещей, телекоммуникационных систем и технологий, переданным в\n' +
            'БГУ компанией\n' +
            'MOXA', image: '/assets/images/machine_lab(2).jpg'
        },
        {
          id: 2, description: 'У\n' +
            'чебный класс испол\n' +
            'ьзуется для проведения лабораторных работ по курсам\n' +
            '«Компьютерные сети» и «Промышленные сети», а также для подготовки курсовых и дипломных\n' +
            'работ. На базе оборудования класса студентами выполняются курсовые, дипломные и\n' +
            'магистерские работы.', image: '/assets/images/machine_lab(3).jpg'
        }
      ]
    },
    {
      labId: 3,
      titleOfLab: 'Подсистема отображения информации и видеонаблюдения',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: 'Подсистема отображения информации является одной из ключевых подсистем в\n' +
            'рамках разрабатываемого решения, задачей которого является визуализация контекстно\n' +
            '-\n' +
            'зависимых данных по требованию. Ключевые характеристики\n' +
            'подсистемы отображения\n' +
            'информации:', image: 'src/assets/images/CCTV(1).jpg'
        },
        {
          id: 1,
          description: 'Включение в единую сеть: устройства отображения информации должны\n' +
            'быть подключены непосредственно в единую сеть устройств, для обеспечения тесной\n' +
            'интеграции между ними и другими подсистемами с использованием протоколов\n' +
            'сетевого и\n' +
            'более высоких уровней модели OSI.\n' +
            '•\n' +
            'Возможность удаленного управления: подразумевается, что отдельные\n' +
            'устройства подсистемы отображения способны реагировать на команды, поступающие из\n' +
            'других подсистем, включенных в единую сеть, и что управление\n' +
            'устройством и его\n' +
            'базовыми функциями осуществляется только в результате реакции на эти команды.\n' +
            '•\n' +
            'Отображение статической информации: отдельные устройства подсистемы\n' +
            'отображения должны быть способны по команде с подсистемы управления осуществлять\n' +
            'отображе\n' +
            'ние статической графической информации, до поступления новой команды.',
          image: 'src/assets/images/CCTV(2).jpg'
        }, {
          id: 2, description: 'Отображение видеоинформации в статическом режиме: отдельные\n' +
            'устройства подсистемы отображения должны быть способны по команде с подсистемы\n' +
            'управления осуществлять отображение видеоинфо\n' +
            'рмации с предварительной загрузкой\n' +
            'видеофрагмента в память устройства через стандартные протоколы передачи файлов по\n' +
            'сети.\n' +
            '•\n' +
            'Отображение видеоинформации в потоковом режиме: отдельные устройства\n' +
            'подсистемы отображения должны быть способны по команде с подси\n' +
            'стемы управления\n' +
            'осуществлять отображение видеоинформации, передаваемой в потоковом режиме, как с\n' +
            'источников записи в реальном времени, предоставляемых подсистемой видеонаблюдения,\n' +
            'так и со статических источников, предоставляемых подсистемой хранения, по з\n' +
            'апросу.', image: 'src/assets/images/CCTV(3).jpg'
        }
      ]
    },
    {
      labId: 4,
      titleOfLab: 'Учебная практикоориентированная интеллектуальная система промышленного интернета вещей.',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: '', image: 'src/assets/images/intelligent_system(1).jpg'
        },
        {
          id: 1, description: '', image: 'src/assets/images/intelligent_system(2).jpg'
        }, {
          id: 2, description: '', image: 'src/assets/images/intelligent_system(3).jpg'
        }
      ]
    },
    {
      labId: 5,
      titleOfLab: 'Телекоммуникационная система.',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: 'Телекоммуникационная подсистема представляет собой локальную\n' +
            'вычислительную сеть, в которой используются проводные (Gigabit Ethernet) и\n' +
            'беспроводные (WiFi\n' +
            '802.11ac) коммуникации. В сети функционируют выделенный сервер\n' +
            'и рабочие станции для управления и мониторинга. Телекоммуникационная подсистема\n' +
            'интегрируется в корпоративную сеть университета. К этой подсистеме подключаются\n' +
            'подсистемы отображения информаци\n' +
            'и, видеонаблюдения и учебные лаборатории.\n' +
            'Спроектированная телекоммуникационная является масштабируемой и может быть\n' +
            'агрегирована с различными существующими лабораториями, разработками и проектами\n' +
            'преподавателей и студентов, такими как: лаборатория промышл\n' +
            'енных сетей и IoT,\n' +
            'лаборатория машинного обучения, лаборатория автоматизированного проектирования,\n' +
            'лаборатория систем идентификации и др', image: 'src/assets/images/tele-lab(1).jpg'
        },
        {
          id: 1,
          description: 'Взаимодействие между основными составляющими и разработанными системами\n' +
            'осуществляется на базе ЛВС ЦОС БГУ. Для раздел\n' +
            'ения сегментов сети используются\n' +
            'входные маршрутизаторы учебных корпусов, а также коммутаторы и маршрутизаторы,\n' +
            'установленные на отдельных этажах учебного корпуса. Кроме того, подключение к\n' +
            'отдельным сегментам сети также возможно с использованием беспровод\n' +
            'ного соединения.\n' +
            'Доступ в сеть Интернет из внутреннего сегмента сети осуществляется через\n' +
            'центральный коммуникационный узел БГУ.\n' +
            'Хранение информации осуществляется на базе серверного оборудования\n' +
            'подсистемы хранения информации. При помощи разработанного пр\n' +
            'ограммного\n' +
            'обеспечения осуществляется запись видеопотока, поступающего с отдельных узлов\n' +
            'подсистемы видеонаблюдения, на серверное хранилище подсистемы хранения\n' +
            'информации. В дальнейшем визуализация записанной информации в реальном времени и\n' +
            'по требованию м\n' +
            'ожет быть запрошена подсистемой визуализации для отображения\n' +
            'видеопотока любым из устройств подсистемы отображения, а также другими устройствами,\n' +
            'подключенными к внутренней сети при помощи, например, беспроводного соединения.',
          image: 'src/assets/images/tele-lab(2).jpg'
        }, {
          id: 2, description: '\n' +
            'Помимо отображения, записанн\n' +
            'ые видеопоследовательности могут использоваться\n' +
            'для реализации учебных проектов по работе с изображениями и видео для решения\n' +
            'разнообразных задач компьютерного зрения, распознавания, идентификации, поиска\n' +
            'аномалий. Запрос за соответствующими исходными данн\n' +
            'ыми может осуществляться с\n' +
            'оборудования лабораторий глубокого обучения, систем идентификации,\n' +
            'автоматизированного проектирования промышленных сетей и интернета вещей.\n' +
            'Администрирование серверного оборудования и управление программным\n' +
            'обеспечением подсистем\n' +
            'ы хранения информации осуществляется на базе центра\n' +
            'управления ЦОС.', image: 'src/assets/images/tele-lab(3).jpg'
        }
      ]
    },
    {
      labId: 6,
      titleOfLab: 'Учебная система обеспечения безопасности коммуникационных процессов на основе технологий радиочастотной идентификации.',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: 'Подсистема видеонаблюдения\n' +
            'Приоритетной задачей разрабатываемой подсистемы видеонаблюдения является\n' +
            'повышение качества практикоориентированной подготовки специалистов в области\n' +
            'радиофизики и компьютерных технологий путем глубокой модернизации учебного\n' +
            'процесса на базе создаваемого К\n' +
            'омплекса. Соответственно, подсистема должна обладать\n' +
            'достаточной гибкостью, варьируемым диапазоном настроек и типов соответствующих\n' +
            'систем для обеспечения эффективного и полноценного процесса обучения студент,\n' +
            'специалистов высокого уровня. Также задачей по\n' +
            'дсистемы устройств видеонаблюдения\n' +
            'является и обеспечение безопасности студентов и сотрудников факультета, сохранности\n' +
            'оборудования и личных вещей, и т.д.\n' +
            'Подсистема видеонаблюдения отвечает за сбор первичной информации. Задачей\n' +
            'этой системы является непре\n' +
            'рывный сбор видеоинформации с записью на сетевое\n' +
            'хранилище, предоставляемое подсистемой хранения, а также предоставление возможности\n' +
            'потоковой передачи захватываемой видеоинформации в реальном времени по запросу от\n' +
            'подсистемы управления.', image: 'src/assets/images/lab-radio(1).jpg'
        },
        {
          id: 1, description: 'Отдельные устройства подсистемы видеонаблюдения должны обеспечивать\n' +
            'возможность интеграции с единой сетью для работы с подсистемами управления и\n' +
            'хранения. Для реализации такого взаимодействия могут быть использованы\n' +
            'специализированные IP\n' +
            '-\n' +
            'камеры с поддержко\n' +
            'й подключения при помощи Ethernet; в\n' +
            'отличие от стандартных CCTV камер, IP\n' +
            '-\n' +
            'камеры позволяют осуществлять более глубокую\n' +
            'интеграцию и не требуют выделенных устройств для промежуточного хранения и передачи\n' +
            'информации\n' +
            '–\n' +
            'видеопоток с камеры может записываться\n' +
            'в реальном времени на сетевое\n' +
            'хранилище, доступ к которому предоставляется через подсистему хранения. Кроме того,\n' +
            'подсистема управления при необходимости может подключиться непосредственно к\n' +
            'конечному устройству для перехвата видеопотока, что, в свою очере\n' +
            'дь, обеспечивает\n' +
            'возможность его трансляции в реальном времени.', image: 'src/assets/images/lab-radio(2).jpg'
        }, {
          id: 2, description: 'Подсистемы радиочастотной идентификации\n' +
            'Архитектура разработанной системы спроектирована с возможностью расширения\n' +
            'дополнительными модулями. В качестве примеров таких модулей предлагает\n' +
            'ся реализация\n' +
            'модуля контроля доступа в помещение и модуля контроля книг и оборудования.\n' +
            'Функциональная схема подсистемы считывания RFID информации в системах\n' +
            'идентификации и аутентификации с отображенными указанными модулями представлена\n' +
            'на рисунке\n' +
            '1\n' +
            '.\n' +
            'Так\n' +
            'им образом, разработанная подсистема представляет собой модульный\n' +
            'комплекс, позволяющий добавлять дополнительные элементы в процессе работы студентов\n' +
            'над дипломными проектами и лабораторными работами.\n' +
            'Далее подробнее описываются составные части системы.', image: 'src/assets/images/lab-radio(3).jpg'
        }
      ]
    },
    {
      labId: 7,
      titleOfLab: 'Подсистема считывания RFID информации в системах идентификации и аутентификации.',
      svgLeft: '',
      svgRight: '',
      arrayOfArticles: [
        {
          id: 0, description: '', image: 'src/assets/images/(1).jpg'
        },
        {
          id: 1, description: '', image: 'src/assets/images/(2).jpg'
        }, {
          id: 2, description: '', image: 'src/assets/images/(3).jpg'
        }
      ]
    }
  ];

  constructor() {
  }

  public initLabFromService(activeRouteId: string): LaboratoryInterface {
    return this.labs.find(lab => lab.labId === +activeRouteId);
  }
}
