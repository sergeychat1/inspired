import { DATA, footer } from '../const';
import { createElement } from '../utils/createElement';

const createFooterCategory = () => {
  const footerCategory = createElement('div', {
    className: 'footer__item footer__item_category footer-category',
  });

  createElement(
    'h2',
    {
      className: 'footer__title footer-category__title',
      textContent: 'Каталог',
    },
    { parent: footerCategory },
  );

  const footerCategoryList = createElement(
    'ul',
    {
      className: 'footer-category__list'
    },
    {
      parent: footerCategory,
    }
  );

  for (const key in DATA.navigation) {
    const footerCategoryItem = createElement(
      'li',
      {
        className: 'footer-category__item'
      },
      {
        parent: footerCategoryList,
        append: createElement(
          'h3',
          {
            className: 'footer-category__subtitle',
          },
          {
            append: createElement('a', {
              className: 'footer__link',
              href: `#/${key}`,
              textContent: DATA.navigation[key].title
            })
          }
        )
      }
    );

    createElement(
      'ul',
      {
        className: 'footer-category__sublist',
      },
      {
        parent: footerCategoryItem,
        appends: DATA.navigation[key].list.map(item =>
          createElement(
            'li',
            {
              className: 'footer__link'
            },
            {
              append: createElement('a', {
                className: 'footer__link',
                href: `#/${key}/${item.slug}`,
                textContent: item.title,
              }),
            }
          )
        )
      }
    )
  };

  

  return footerCategory;
};

export const renderFooter = () => {
  footer.textContent = '';

  const container = createElement(
    'div',
    {
      className: 'container',
    },
    { parent: footer },
  );

  const footerContainer = createElement(
    'div',
    {
      className: 'footer__container',
    },
    { parent: container, append: createFooterCategory() },
  );

  footerContainer.insertAdjacentHTML(
    'beforeend',
    `
      <div class="footer__item footer__item_social footer-social">
        <h2 class="footer__title footer-social__title">Зв'язатися з нами</h2>

        <p class="footer-social__subtitle">Контакти та адреси магазинів</h3>

        <ul class="footer-social__list">


          <li class="footer-social__item">
            <a href="#" class="footer-social__link footer-social__link_fb footer__link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z"/>
              </svg> 
            </a>                 
          </li>
        </ul>

      </div>

      <div class="footer__item footer__item_contacts footer-contacts">
        <a class="footer__link" href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
        <a class="footer__link" href="tel:380990079534">+38 (099) 00 79 534</a>
      </div>

      <div class="footer__item footer__item_copyright footer-copyright">
        <p>© INSPIRED, 2023</p>
      </div>

      <div class="footer__item footer__item_development footer-development">
          <ul class="footer-development__list">
            <li class="footer-development__item">
              Designer: <a class="footer__link" href="https://t.me/sergeychat1">Serhii Pankovets</a>
            </li>

            <li class="footer-development__item">
              Developer: <a class="footer__link" href="https://t.me/sergeychat1">Serhii Pankovets</a>
            </li>
          </ul>
      </div>
    `,
  );
};
