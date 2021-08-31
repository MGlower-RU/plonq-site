import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          defaults: {
            products: {
              discontinued: {
                1: 'The product is',
                2: ' discontinued'
              },
              linkTo: 'Go to',
              moreInfo: 'More details',
              whereToBuy: 'Where to buy?',
              findStore: {
                p: {
                  1: 'Find Plonq',
                  2: ' among',
                  3: ' stores'
                },
                link: 'Find on map'
              },
              about: {
                app: 'About app',
                cigarettes: 'About e-cigarettes',
              },
              soon: 'Coming soon',
            },
            contactForm: {
              name: 'Full name',
              placeholderName: 'Ivan Petrov',
              number: 'Phone number',
              message: 'Message',
              submitBtn: 'Send'
            },
            phrases: {
              stick: {
                standard: {
                  1: 'New standard',
                  2: ' disposable e-cigarettes.'
                },
                astonisment: {
                  1: 'E-cigarette that knows',
                  2: ' how to surprise.'
                }
              }
            },
          },
          header: {
            nav: {
              products: 'Products',
              app: 'App',
              distribution: 'Distribution',
              contact: 'Contact us',
              wholesaleBuyers: 'Wholesale buyers',
              refund: 'Refund conditions',
              company: 'About company',
              policy: 'Privacy policy',
            }
          },
          main: {
            products: {
              plonq400: {
                description: 'Plonq 400 Puff Disposable Device'
              },
              plonq500: {
                description: 'Plonq 500 Puff Disposable Device'
              },
              plonqX: {
                description: 'Plonq X Starter Kit'
              },
              plonqXCartridge: {
                description: 'Two replacement cartridges for Plonq X'
              },
            },
            features: {
              about: {
                cigarette: 'Plonq is an electronic vaporizer that converts liquid to vapor.',
                app: 'Plonq AI is based on behavioral therapy that has been proven to be effective.',
              }
            }
          },
          products: {
            plonqX: {
              header: 'Plonq X device',
              description: 'Plonq X is an electronic vaporizer that converts liquid to vapor.',
              p: {
                1: 'The Plonq is equipped with vibration, a circular LED and a 360 mAh battery that lasts for a full day of moderate use when paired with a smartphone.',
                2: 'The USB C port charges your device in less than an hour.'
              }
            },
            plonqPod: {
              header: 'Plonq POD capsule',
              description: 'Plonq POD is a disposable liquid capsule. The fluid is created and filled under strict control.',
              p: {
                1: 'Capsules are not intended to be refilled. 1 capsule on average is designed for 300 puffs, which is approximately equal to 1.5-2 packs of cigarettes.'
              }
            },
            plonq500: {
              header: 'Plonq 500 device',
              description: 'A disposable electronic vaporizer that converts liquid to vapor.',
              p: {
                1: 'The Plonq 500 is rated for 500 puffs and is not intended to be refilled or recharged.'
              }
            },
            composition: {
              header: 'Liquid composition',
              elements: {
                1: {
                  header: 'Propylene glycol and glycerin (50/50)',
                  description: {
                    1: 'Propylene glycol and glycerin are chemically pure liquids used to create visible vapor. Instead of electronic cigarettes, they are used in medicine, cosmetology and the food industry.'
                  }
                },
                2: {
                  header: 'Salt nicotine',
                  description: {
                    1: 'Salt nicotine is a stimulant obtained from tobacco leaves and treated with various acids.',
                    2: 'Plonq e-liquids use a new generation of Q-salt nicotine with a higher absorption rate.'
                  }
                },
                3: {
                  header: 'Flavors',
                  description: {
                    1: 'Plonq flavors contain both natural and artificial ingredients that give the product its unique taste.'
                  }
                },
                4: {
                  header: 'Benzoic acid',
                  description: {
                    1: 'It is part of saline nicotine. Makes the steam softer and helps to quickly saturate the body with nicotine.'
                  }
                },
              }
            },
            quality: 'Quality certificates'
          },
          application: {
            compare: {
              header: 'Comparison of solutions',
              chart: {
                labels: {
                  top: 'Smoking intensity',
                  right: 'Days'
                },
                legend: {
                  1: 'Behavioral Therapy Mobile Apps',
                  2: 'Nicotine replacement therapy',
                  3: 'Medicines (Tabex, Champix, etc.)',
                },
                link: 'Read the study'
              }
            },
            therapist: {
              header: 'Digital therapist',
              title: 'PLONQ AI is based on behavioral therapy that has been proven to be effective.',
              description: 'The algorithm will study your smoking habit and help you gradually reduce the intensity to complete quitting, avoiding withdrawal symptoms.'
            },
            howItWorks: {
              header: 'How it works',
              0: {
                title: 'Plonq Ai studies you',
                p: 'For the first week, smoke in your usual rhythm, while the algorithm learns your habit.'
              },
              1: {
                title: 'Plonq Ai studies you',
                p: 'For the first week, smoke in your usual rhythm, while the algorithm learns your habit.'
              },
              2: {
                title: 'Plonq Ai studies you',
                p: 'For the first week, smoke in your usual rhythm, while the algorithm learns your habit.'
              },
            },
            update: {
              header: 'Update',
              description: {
                1: 'Time after time we will update Plonq AI and make smoking management more efficient.',
                2: 'You don\'t need to buy new devices for this. We took care of everything.',
                3: 'Just update PLONQ AI via the mobile app.'
              }
            },
          },
          plonq500: {
            advantages: {
              header: 'Everything as you wanted',
              1: {
                header: 'No smoke',
                description: 'Steam dissolves in the air and leaves no odor on clothes'
              },
              2: {
                header: 'No buttons',
                description: 'Plonq automatically turns on with every puff'
              },
              3: {
                header: 'No maintenance',
                description: 'The device does not need to be charged or filled with liquid'
              },
              4: {
                header: 'Not scared to lose',
                description: 'Designed for single use'
              },
            },
            specifications: {
              header: 'Specifications',
              1: {
                name: 'Battery',
                description: '370 mAh'
              },
              2: {
                name: 'Puffs',
                description: 'up to 500'
              },
              3: {
                name: 'Liquid',
                description: '2 ml'
              },
              4: {
                name: 'RTP',
                description: '430 rubles'
              },
              5: {
                name: 'Nicotine',
                description: '20 mg'
              },
            },
            design: {
              header: 'Elegant design',
              tagline: {
                1: 'Discreet',
                2: ' and confident',
              }
            },
            puff: {
              header: 'Reference puff',
              p: 'The tight draft and balance of vaporization are what makes the Plonq vaping so special.',
              specifications: {
                1: {
                  unit: 'kPa',
                  specification: 'Puff density'
                },
                2: {
                  unit: 'mg',
                  specification: 'Vapor density'
                },
                3: {
                  unit: 'sec',
                  specification: 'Activation speed'
                },
              }
            },
            vapor: {
              header: 'Soft vapor',
              p: 'Luminar flow separation with 360° filter, provides a comfortable vapor temperature, making vaping truly smooth.',
            },
            components: {
              header: 'Quality components',
              description: {
                1: 'We use Japanese cotton to store liquid in the device.',
                2: 'Latest Segger 3856-G microcontroller delivers consistent flavor throughout the entire vaping process',
                3: 'A quality battery made of pure cobalt faithfully withstands 500 puffs',
                4: 'The body of the device is made of high-quality PCTG plastic, which does not emit toxins when heated',
              }
            },
            composition: {
              header: 'Safe fluid composition',
              p: {
                1: 'Each taste undergoes a "Toxicological Analysis" at the independent laboratory "Ingesciences" in France.',
                2: 'Only when we are convinced of safety do we allow taste to be sold.'
              }
            },
            natureTastes: {
              header: 'Natural tastes',
              p: 'Unlike our Chinese counterparts, we do not use sweeteners or flavor enhancers.'
            },
            quality: {
              header: 'Strict quality control',
              p: 'Each Plonq device undergoes quality control according to the international AQL system at a strict level of S 0.4, which allows it to withstand a waste rate of less than 0.2%.'
            },
            tastes: {
              header: 'Assortment of flavors',
              1: {
                taste: 'Mint',
                description: 'Nicotine 2%'
              },
              2: {
                taste: 'Pineapple',
                description: 'Nicotine 2%'
              },
              3: {
                taste: 'Melon',
                description: 'Nicotine 2%'
              },
              4: {
                taste: 'Mango',
                description: 'Nicotine 2%'
              },
              5: {
                taste: 'Cola',
                description: 'Nicotine 2%'
              },
              6: {
                taste: 'Cherry',
                description: 'Nicotine 2%'
              },
              7: {
                taste: 'Grape',
                description: 'Nicotine 2%'
              },
              8: {
                taste: 'Energy drink',
                description: 'Nicotine 2%'
              },
              9: {
                taste: 'Tobacco',
                description: 'Nicotine 2%'
              },
              10: {
                taste: 'Coffee',
                description: 'Nicotine 2%'
              },
              11: {
                taste: 'Green tea',
                description: 'Nicotine 2%'
              },
            },
          },
          contactUs: {
            header: 'Contact us',
            p: {
              1: 'We are glad to help you and answer any questions about Plonq.',
              2: 'Write to us in the messenger and we will respond within 5 minutes or write an email to info@plonq.ru and we will respond within 24 hours.',
            }
          },
          wholesaleBuyers: {
            header: {
              1: 'Working conditions',
              2: ' with wholesale buyers'
            },
            list: {
              1: 'The minimum order for Plonq is from 20,000 rubles.',
              2: 'Sending is carried out after 100% prepayment by bank transfer.',
              3: 'Delivery of bulk orders is carried out by transport companies from Moscow throughout Russia.',
              4: 'All supplied products are certified; upon delivery, copies of certificates of conformity, product quality, as well as a full package of documents are provided.'
            },
            p: {
              1: 'To receive a wholesale price list, or other information on cooperation, send a request and a short description of your organization to the address: opt@plonq.ru',
              2: 'You can contact the wholesale department by Tel: +7 495 125-19-91 on weekdays from 10 to 18 hours or through the feedback form:'
            }
          },
          footer: {
            emailSubscription: {
              p: 'Subscribe to our updates',
              button: 'Subscribe'
            },
            nav: {
              products: {
                header: 'Products'
              },
              techs: {
                header: 'Technologies',
                app: 'About app',
                cigarettes: 'About e-cigarettes'
              },
              support: {
                header: 'Support',
                contact: 'Contact us',
                refund: 'Return conditions',
                policy: 'Privacy policy'
              },
              other: {
                header: 'Other',
                places: 'Store places',
                company: 'About company',
                wholesaleBuyers: 'Wholesale buyers'
              },
            },
            warning: {
              1: 'ADULTS ONLY',
              2: 'The site is used solely for the purpose of',
              3: ' informing current consumers of PLONQ products',
              4: 'Protected by issued and/or pending international patents.',
            }
          }
        }
      },
      ru: {
        translation: {
          defaults: {
            products: {
              discontinued: {
                1: 'Продукт снят',
                2: ' с производства'
              },
              linkTo: 'Перейти на',
              moreInfo: 'Подробнее',
              whereToBuy: 'Где купить?',
              findStore: {
                p: {
                  1: 'Найдите Plonq',
                  2: ' среди',
                  3: ' магазинов'
                },
                link: 'Найти магазин'
              },
              about: {
                app: 'О приложении',
                cigarettes: 'Об элетронных сигаретах',
              },
              soon: 'Скоро в продаже',
            },
            contactForm: {
              name: 'Ваше ФИО',
              placeholderName: 'Иван Петров',
              number: 'Номер телефона',
              message: 'Сообщение',
              submitBtn: 'Отправить'
            },
            phrases: {
              stick: {
                standard: {
                  1: 'Новый стандарт',
                  2: ' одноразовых e-сигарет'
                },
                astonisment: {
                  1: 'Электронная сигарета,',
                  2: ' которая умеет удивлять.'
                }
              }
            },
          },
          header: {
            nav: {
              products: 'Продукты',
              app: 'Приложение',
              distribution: 'Дистрибуция',
              contact: 'Связаться с нами',
              wholesaleBuyers: 'Оптовым покупателям',
              refund: 'Условия возврата',
              company: 'О компании',
              policy: 'Политика конфиденциальности',
            }
          },
          main: {
            products: {
              plonq400: {
                description: 'Одноразовое устройство Plonq на 400 затяжек'
              },
              plonq500: {
                description: 'Одноразовое устройство Plonq на 500 затяжек'
              },
              plonqX: {
                description: 'Стартовый набор Plonq X'
              },
              plonqXCartridge: {
                description: 'Два сменных картриджа для устройства Plonq X'
              },
            },
            features: {
              about: {
                cigarette: 'Plonq – электронный испаритель, который преобразует жидкость в пар.',
                app: 'Plonq AI создан на основе поведенческой терапии, которая доказала свою эффективность.',
              }
            }
          },
          products: {
            plonqX: {
              header: 'Устройство Plonq X',
              description: 'Устройство Plonq X — это электронный испаритель, который преобразует жидкость в пар.',
              p: {
                1: 'Plonq оснащен вибрацией, круговым светодиодом и аккумулятором 360 mAh, которого хватает на целый день умеренного использования в паре со смартфоном.',
                2: 'Благодаря порту USB C устройство заряжается менее чем за час.'
              }
            },
            plonqPod: {
              header: 'Капсула Plonq POD',
              description: 'Plonq POD - это одноразовая капсула с жидкостью. Жидкость создана и заправлена при строгом контроле.',
              p: {
                1: 'Капсулы не предназначены для повторной заправки. 1 капсула в среднем рассчитана на 300 затяжек, что приблизительно равно 1,5-2 пачек сигарет.'
              }
            },
            plonq500: {
              header: 'Устройство Plonq 500',
              description: 'Одноразовый электронный испаритель, который преобразует жидкость в пар.',
              p: {
                1: 'Plonq 500 рассчитан на 500 затяжек и не предназначен для повторной перезаправки и подзарядки.'
              }
            },
            composition: {
              header: 'Состав жидкости',
              elements: {
                1: {
                  header: 'Пропиленгликоль и глицерин (50/50)',
                  description: {
                    1: 'Пропиленгликоль и глицерин — химически чистые жидкости, используемые для создания видимого пара. Кроме электронных сигарет их применяют в медицине, косметологии и пищевой промышленности.'
                  }
                },
                2: {
                  header: 'Солевой никотин',
                  description: {
                    1: 'Солевой никотин - стимулятор, получаемый из табачного листа и обработанный различными кислотами.',
                    2: 'В жидкостях Plonq используется новое поколение солевого никотина Q-salt c более высокой скоростью усваиваемости.'
                  }
                },
                3: {
                  header: 'Ароматизаторы',
                  description: {
                    1: 'В состав ароматизаторов Plonq входят как природные, так и искусственные компоненты, придающие продукту неповторимый вкус.'
                  }
                },
                4: {
                  header: 'Бензоиная кислота',
                  description: {
                    1: 'Входит в состав солевого никотина. Делает пар мягче и помогает быстрее насыщать организм никотином.'
                  }
                },
              }
            },
            quality: 'Сертификаты качества'
          },
          application: {
            compare: {
              header: 'Сравнение решений',
              chart: {
                labels: {
                  top: 'Интенсивность курения',
                  right: 'Дни'
                },
                legend: {
                  1: 'Мобильные приложения на основе поведенческой терапии',
                  2: 'Никотино-заменительная терапия',
                  3: 'Медикаменты (Табекс, Чампикс и др.)',
                },
                link: 'Читать исследование'
              }
            },
            therapist: {
              header: 'Цифровой терапевт',
              title: 'PLONQ AI создан на основе поведенческой терапии, которая доказала свою эффективность.',
              description: 'Алгоритм изучит вашу привычку к курению и поможет плавно снизить интенсивность вплоть до полного отказа, избегая симптомов отмены.'
            },
            howItWorks: {
              header: 'Как это работает',
              0: {
                title: 'Plonq Ai изучает Вас',
                p: 'Первую неделю курите в привычном для себя ритме, пока алгоритм изучит вашу привычку.'
              },
              1: {
                title: 'Plonq Ai изучает Вас',
                p: 'Первую неделю курите в привычном для себя ритме, пока алгоритм изучит вашу привычку.'
              },
              2: {
                title: 'Plonq Ai изучает Вас',
                p: 'Первую неделю курите в привычном для себя ритме, пока алгоритм изучит вашу привычку.'
              },
            },
            update: {
              header: 'Обновление',
              description: {
                1: 'Раз за разом мы будем обновлять Plonq AI и делать управление курением все более эффективным.',
                2: 'Для этого вам не нужно покупать новые устройства. Мы обо всем позаботились.',
                3: 'Просто обновите PLONQ AI через мобильное приложение.'
              }
            },
          },
          plonq500: {
            advantages: {
              header: 'Всё как вы хотели',
              1: {
                header: 'Без дыма',
                description: 'Пар растворяется в воздухе и не оставляет запаха на одежде'
              },
              2: {
                header: 'Без кнопок',
                description: 'Plonq автоматически включается при каждой затяжке'
              },
              3: {
                header: 'Без обслуживания',
                description: 'Устройство не нужно подзаряжать или заполнять жидкостью'
              },
              4: {
                header: 'Не страшно потерять',
                description: 'Предназначены для одноразового использования'
              },
            },
            specifications: {
              header: 'Характеристики',
              1: {
                name: 'Батарейка',
                description: '370 мАч'
              },
              2: {
                name: 'Затяжки',
                description: 'до 500'
              },
              3: {
                name: 'Жидкость',
                description: '2 мл'
              },
              4: {
                name: 'РРЦ',
                description: '430 рублей'
              },
              5: {
                name: 'Никотин',
                description: '20 мг'
              },
            },
            design: {
              header: 'Элегантный дизайн',
              tagline: {
                1: 'Сдержанный',
                2: 'и уверенный в себе',
              }
            },
            puff: {
              header: 'Эталонная тяга',
              p: 'Плотная тяга и баланс парообразования, вот что делает парение Plonq особенным.',
              specifications: {
                1: {
                  unit: 'кПа',
                  specification: 'Плотность тяги'
                },
                2: {
                  unit: 'мг',
                  specification: 'Плотность пара'
                },
                3: {
                  unit: 'сек',
                  specification: 'Скорость активации'
                },
              }
            },
            vapor: {
              header: 'Мягкий пар',
              p: 'Разделение люминарного потока  с фильтром 360°, обеспечивает  комфортную температуру пара, делая парение по-настоящему мягким.',
            },
            components: {
              header: 'Качественные компоненты',
              description: {
                1: 'Для хранения жидкости в устройстве мы используем японский хлопок',
                2: 'Новейший микроконтроллер Segger 3856-G обеспечивает стабильный вкус на протяжении  всего процесса парения',
                3: 'Качественная батарейка из чистого кобальта добросовестно выдерживает 500 затяжек',
                4: 'Корпус устройства изготовлен из качественного PCTG пластика, который не выделяет токсины при нагревании',
              }
            },
            composition: {
              header: 'Безопасный состав жидкости',
              p: {
                1: 'Каждый вкус проходит «Токсикологический анализ» в независимой лаборатории «Ingesciences» во Франции.',
                2: 'Только убедившись в безопасности, мы допускаем вкус к продаже.'
              }
            },
            natureTastes: {
              header: 'Естественные вкусы',
              p: 'В отличие от китайских аналогов, мы не используем подсластители и усилители вкуса.'
            },
            quality: {
              header: 'Строгий контроль качества',
              p: 'Каждое устройство Plonq проходит контроль качества по международной системе AQL на строгом уровне S 0.4, что позволяет выдерживать количество брака менее 0.2%.'
            },
            tastes: {
              header: 'Ассортимент вкусов',
              1: {
                taste: 'Мята',
                description: 'Никотин 2%'
              },
              2: {
                taste: 'Ананас',
                description: 'Никотин 2%'
              },
              3: {
                taste: 'Дыня',
                description: 'Никотин 2%'
              },
              4: {
                taste: 'Манго',
                description: 'Никотин 2%'
              },
              5: {
                taste: 'Кола',
                description: 'Никотин 2%'
              },
              6: {
                taste: 'Вишня',
                description: 'Никотин 2%'
              },
              7: {
                taste: 'Виноград',
                description: 'Никотин 2%'
              },
              8: {
                taste: 'Энергетик',
                description: 'Никотин 2%'
              },
              9: {
                taste: 'Табак',
                description: 'Никотин 2%'
              },
              10: {
                taste: 'Кофе',
                description: 'Никотин 2%'
              },
              11: {
                taste: 'Зелёный чай',
                description: 'Никотин 2%'
              },
            }
          },
          contactUs: {
            header: 'Связаться с нами',
            p: {
              1: 'Мы рады вам помочь и ответить на любые вопросы о Plonq.',
              2: 'Напишите нам в мессенджере и мы ответим в течение 5 минут или напишите письмо на почту info@plonq.ru и мы ответим не позднее чем через 24 часа.',
            }
          },
          wholesaleBuyers: {
            header: {
              1: 'Условия работы',
              2: ' с оптовыми покупателями'
            },
            list: {
              1: 'Минимальный заказ для Plonq от 20 000 рублей.',
              2: 'Отправка осуществляется после 100% предоплаты по безналичному расчету.',
              3: 'Доставка оптовых заказов производится транспортными компаниями из Москвы по всей России.',
              4: 'Вся поставляемая продукция сертифицирована, при поставке предоставляются копии сертификатов соответствия, качества продукции, также полный пакет документов.'
            },
            p: {
              1: 'Для получения оптового прайс-листа, или другой информации по сотрудничеству, вышлите запрос и краткое описание Вашей организации на адрес: opt@plonq.ru',
              2: 'Связаться с оптовым отделом Вы можете по Тел: +7 495 125-19-91 в рабочие дни с 10 до 18 часов или через форму обратной связи:'
            }
          },
          footer: {
            emailSubscription: {
              p: 'Подпишитесь на наши обновления',
              button: 'Подписаться'
            },
            nav: {
              products: {
                header: 'Продукты'
              },
              techs: {
                header: 'Технологии',
                app: 'О приложении',
                cigarettes: 'Об электронных сигаретах'
              },
              support: {
                header: 'Поддержка',
                contact: 'Связаться с нами',
                refund: 'Условия возврата',
                policy: 'Политика конфиденциальности'
              },
              other: {
                header: 'Прочее',
                places: 'Точки продаж',
                company: 'О компании',
                wholesaleBuyers: 'Оптовым покупателям'
              },
            },
            warning: {
              1: 'ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА.',
              2: 'Сайт используется исключительно в целях информирования',
              3: ' действующих потребителей продукции PLONQ',
              4: 'Защищено выпущенными и/или находящимися на одобрении международными патентами..',
            }
          }
        }
      },
    }
  })

export default i18n;