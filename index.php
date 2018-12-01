<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Artik Mangasaryan</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="резюме, разработчик, ключевые навыки, поиск персонала, верстальщик, frontend, front-end, фронтэнд, фронтэндер, Артик, Арташес, Мангасарян, CV, Mangasaryan, Artik, Artashes" />
  <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
  <link rel="manifest" href="/manifest.json">
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="msapplication-TileColor" content="#10272f" />
  <meta name="theme-color" content="#10272f" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Артик Мангасарян" />
  <meta name="title" content="Артик Мангасарян" />
  <meta property="og:title" content="Артик Мангасарян" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://artik.me" />
  <meta name="twitter:domain" content="http://artik.me" />
  <meta name="description" content="Резюме Мангасаряна Арташеса" />
  <meta property="og:site_name" content="Резюме Мангасаряна Арташеса" />
  <meta name="twitter:site" content="Резюме Мангасаряна Арташеса" />
  <meta name="twitter:description" content="Резюме Мангасаряна Арташеса" />
  <meta property="og:description" content="Резюме Мангасаряна Арташеса" />
  <link rel="stylesheet" href="styles/fonts/lato/font.css" />
  <link rel="stylesheet" href="styles/fonts/bebas/font.css" />
  <link rel="stylesheet" href="styles/styles.css" />
</head>

<body>
  <div class="page">
    <header>
      <div class="container">
        <div class="flex">
          <div class="left-block"><a href="/" class="logo" aria-label="Artik Mangasaryan">AM</a></div>
          <ul class="right-block contacts">
            <li>
              <a href="tel:+79062824201" rel="noreferrer" aria-label="Phone">
                <i aria-hidden="true" class="icon icon_phone"></i>
                <span class="text">+7 906 282 42 01</span>
              </a>
            </li>
            <li>
              <a href="mailto:mail@artik.me" rel="noreferrer"aria-label="Email">
                <i aria-hidden="true" class="icon icon_email"></i>
                <span class="text">mail@artik.me</span>
              </a>
            </li>
            <li>
              <a href="//hh.ru/resume/db6e39e7ff0357d63c0039ed1f617172787049" target="_blank" rel="noreferrer" aria-label="External CV">
                <i aria-hidden="true" class="icon icon_hh"></i>
                <span class="text">HeadHunter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <h1>Artik
          <small>Mangasaryan</small>
        </h1>
        <p class="subtitle">Frontend-developer</p>
      </div>
    </section>

    <section>
      <div class="container">
        <h2>About</h2>
        <div class="about">
          <div class="ava-box">
            <div class="ava"></div>
          </div>

          <table>
            <tr>
              <th>Age</th>
              <td>
                <?php
                  $datetime1 = new DateTime('1994-08-01');
                  $datetime2 = new DateTime();
                  $interval = $datetime1->diff($datetime2);
                  echo $interval->y;
                ?>
                years
              </td>
            </tr>
            <tr>
              <th>Commercial Experience</th>
              <td>
              <?php
                  $datetime1 = new DateTime('2015-05-01');
                  $datetime2 = new DateTime();
                  $interval = $datetime1->diff($datetime2);
                  echo ($interval->y).' years and '.($interval->m).' months';
                ?>
              </td>
            </tr>
            <tr>
              <th>Languages</th>
              <td>
                <nobr>Russian (native),</nobr>
                <nobr>English (Pre-Intermediate)</nobr>
              </td>
            </tr>
            <tr class="hidden-md">
              <th>Phone</th>
              <td>
                <a href="tel:+79062824201" rel="noreferrer" aria-label="Phone">
                  <i aria-hidden="true" class="icon icon_phone"></i>
                  <span class="text">+7 906 282 42 01</span>
                </a>
              </td>
            </tr>
            <tr class="hidden-md">
              <th>Email</th>
              <td>
                <a href="mailto:mail@artik.me" rel="noreferrer"aria-label="Email">
                  <i aria-hidden="true" class="icon icon_email"></i>
                  <span class="text">mail@artik.me</span>
                </a>
              </td>
            </tr>
            <tr class="hidden-md">
              <th>External CV</th>
              <td>
                <a href="//hh.ru/resume/db6e39e7ff0357d63c0039ed1f617172787049" target="_blank" rel="noreferrer" aria-label="External CV">
                  <i aria-hidden="true" class="icon icon_hh"></i>
                  <span class="text">HeadHunter</span>
                </a>
              </td>
            </tr>
          </table>
          <div>
            <cite>Heavy frameworks should be used only where necessary</cite>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div class="container">
        <h2>Key skills</h2>
        <div class="skills">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>LESS</li>
            <li>GIT</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>AJAX</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Experience</h2>
        <div class="experience">
          <div class="table">
            <div class="tr">
              <div class="td empty">
                <h4 class="text-right">Education</h4>
              </div>
              <div class="td"></div>
              <div class="td">
                <h4>Work</h4>
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <div class="year">
                  <i aria-hidden="true" class="icon icon_merge"></i>
                </div>
              </div>
              <div class="td">
                <div class="right"></div>
              </div>
            </div>
            <div class="tr">
              <div class="td">
                <div class="left">
                  <p class="title">Masrer`s degree</p>
                  <p class="description">
                    <b>Northern (Arctic) Federal University</b> <br>
                    Higher School of Information Technologies and Automated Systems <br>
                    2016 &mdash; 2018
                  </p>
                </div>
              </div>
              <div class="td">
                <div class="year">2018</div>
              </div>
              <div class="td">
                <div class="right">
                  <p class="title"><a href="//kaspersky.com" target="_blank" rel="noreferrer" aria-label="Kaspersky Lab.">Kaspersky Lab.</a></p>
                  <p class="description">Developer</p>
                </div>
              </div>
            </div>
            <div class="tr">
              <div class="td"> </div>
              <div class="td">
                <div class="year">2017
                  <i aria-hidden="true" class="icon icon_merge"></i>
                </div>
              </div>
              <div class="td">
                <div class="right">
                  <p class="title"><a href="//luxoft.com" target="_blank" rel="noreferrer" aria-label="Luxoft">Luxoft</a></p>
                  <p class="description">Senior Frontend Developer</p>
                </div>
              </div>
            </div>
            <div class="tr">
              <div class="td">
                <div class="left">
                  <p class="title">Bachelor`s degree</p>
                  <p class="description">
                    <b>Northern (Arctic) Federal University</b> <br>
                    Institute of Mathematics, Information and Space Technologies <br>
                    2012 &mdash; 2016
                  </p>
                </div>
              </div>
              <div class="td">
                <div class="year">2016</div>
              </div>
              <div class="td">
                <div class="right">
                  <p class="title"><a href="//hashboard.ru" target="_blank" rel="noreferrer" aria-label="Hashboard">Hashboard</a></p>
                  <p class="description">Frontend Developer</p>
                </div>
              </div>
            </div>
            <div class="tr">
              <div class="td"> </div>
              <div class="td">
                <div class="year">2015
                  <i aria-hidden="true" class="icon icon_merge"></i>
                </div>
              </div>
              <div class="td empty">
                <div class="right">
                  <p class="title"><a href="//primepix.ru" target="_blank" rel="noreferrer" aria-label="PrimePix">PrimePix</a></p>
                  <p class="description">Junior Frontend Developer</p>
                </div>
              </div>
            </div>
            <div class="tr">
              <div class="td">
                <div class="left">
                  <p class="description">Webmaster`s coursers</p>
                </div>
              </div>
              <div class="td">
                <div class="year">2014</div>
              </div>
              <div class="td empty"></div>
            </div>
            <div class="tr">
              <div class="td"> </div>
              <div class="td">
                <div class="year">2013</div>
              </div>
              <div class="td empty"></div>
            </div>
            <div class="tr">
              <div class="td">
                <div class="left">
                  <p class="title">Initial commit</p>
                  <p class="description">
                    In 2012 I entered the university
                  </p>
                </div>
              </div>
              <div class="td">
                <div class="year">2012</div>
              </div>
              <div class="td empty">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Projects</h2>
        <div class="project">
          <h3>Kaspersky: Tailored Intelligence Reporting System</h3>
          <div class="description">
            <div class="image">
              <img src="./styles/images/projects/kaspersky.jpg" alt="">
            </div>
            <h4>My contribution to the project:</h4>
            <p>Front end development of internal data collection/analysis portal for the analytical department.</p>
            <h4>Used technologies:</h4>
            <ul>
              <li>Angular 5</li>
              <li>TypeScript</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <h3><a href="//hashboard.ru" target="_blank" rel="noreferrer"  aria-label="Hashboard">#hashboard</a></h3>
          <div class="description">
            <div class="image">
              <a href="//hashboard.ru" target="_blank" rel="noreferrer" aria-label="Hashboard">
                <img src="./styles/images/projects/hashboard.jpg" alt="">
              </a>
            </div>
            <h4>My contribution to the project:</h4>
            <p>Front end development of #hashboard service. Cross-browser code, responsive layout, Website
              localization.</p>
            <h4>Used technologies:</h4>
            <ul>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>LESS</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <h3><a href="//new.hashboard.ru/play/?login=artik@hb.ru" target="_blank" rel="noreferrer" aria-label="Hashboard Player">#hashboard player</a></h3>
          <div class="description">
            <div class="image">
              <a href="//new.hashboard.ru/play/?login=artik@hb.ru" target="_blank" rel="noreferrer" aria-label="Hashboard Player">
                <img src="./styles/images/projects/hashboard-player.jpg" alt="">
              </a>
            </div>
            <h4>My contribution to the project:</h4>
            <p>Front end development of #hashboard service. This web application uses HTML5 Video and Audio, handles
              internet-connection troubles. Web site has a fluid layout.</p>
            <h4>Used technologies:</h4>
            <ul>
              <li>jQuery</li>
              <li>RequireJS</li>
              <li>REST</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <h3><a href="//new.hashboard.ru/cabinet/" target="_blank" rel="noreferrer"  aria-label="Hashboard Cabinet">#hashboard cabinet</a></h3>
          <div class="description">
            <div class="image">
              <a href="//new.hashboard.ru/cabinet/" target="_blank" rel="noreferrer"  aria-label="Hashboard Cabinet">
                <img src="./styles/images/projects/hashboard-cabinet.jpg" alt="">
              </a>
            </div>
            <h4>My contribution to the project:</h4>
            <p>Front end development of #hashboard service. This web application uses client-side localization, HTML5
              Audio/Video, the combination of AngularJS + RequireJS + REST API.</p>
            <h4>Used technologies:</h4>
            <ul>
              <li>AngularJS</li>
              <li>RequireJS</li>
              <li>REST</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <h3><a href="//primepix.ru/portfolio/3-15/" target="_blank" rel="noreferrer" aria-label="3-15">Watches online shop «3–15»</a></h3>
          <div class="description">
            <div class="image">
              <a href="//primepix.ru/portfolio/3-15/" target="_blank" rel="noreferrer" aria-label="3-15">
                <img src="./styles/images/projects/m315.jpg" alt="">
              </a>
            </div>
            <h4>My contribution to the project:</h4>
            <p>Front end web development, extension of bootstrap grid, CSS3-transitions.</p>
            <h4>Used technologies:</h4>
            <ul>
              <li>AngularJS</li>
              <li>Bootstrap</li>
              <li>Bitrix</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <h3><a href="//primepix.ru/portfolio/mgrabber/" target="_blank" rel="noreferrer"  aria-label="Pricereporter">Pricereporter</a></h3>
          <div class="description">
            <div class="image">
              <a href="//primepix.ru/portfolio/mgrabber/" target="_blank" rel="noreferrer"  aria-label="Pricereporter">
                <img src="./styles/images/projects/pr.jpg" alt="">
              </a>
            </div>
            <h4>My contribution to the project:</h4>
            <p>Front end web development and technical support of a commercial site</p>
            <h4>Used technologies:</h4>
            <ul>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Bitrix</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

  </div>

  <script src="app.js"></script>

  <!-- Yandex.Metrika counter -->
  <!--
      <script type="text/javascript">
        (function(d, w, c) {
          (w[c] = w[c] || []).push(function() {
            try {
              w.yaCounter35320200 = new Ya.Metrika({
                id: 35320200,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
              });
            } catch (e) {}
          });

          var n = d.getElementsByTagName('script')[0],
            s = d.createElement('script'),
            f = function() {
              n.parentNode.insertBefore(s, n);
            };
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://mc.yandex.ru/metrika/watch.js';

          if (w.opera == '[object Opera]') {
            d.addEventListener('DOMContentLoaded', f, false);
          } else {
            f();
          }
        })(document, window, 'yandex_metrika_callbacks');
      </script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/35320200"
            style="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
      </noscript>
    -->
  <!-- /Yandex.Metrika counter -->
</body>

</html>