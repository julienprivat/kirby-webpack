<?php snippet('header') ?>
    <main id="content">
        <section class="page home smooth-scroll" data-namespace="home" data-menu='home' dir="ltr" data-scroll-container>
            <div class='part top' style='background-color: white; height: 100vh; width: 100vw; position: relative;'>
                <div class="sub_wrapper" data-scroll>
                    <div class="top first">
                        <?php snippet('fa') ?>
                    </div>
                    <div class="top miroir">
                        <?php snippet('wa') ?>
                    </div>
                </div>
            </div>
            <div class='part' style='background-color: orange; height: 100vh; width: 100vw;'></div>
            <div class='part mid' style='background-color: white; height: 100vh; width: 100vw; position: relative;'>
                <div class="sub_wrapper" data-scroll>
                    <div class="top first">
                        <?php snippet('fa') ?>
                    </div>
                    <div class="top miroir">
                        <?php snippet('wa') ?>
                    </div>
                </div>
            </div>
            <div class='part' style='background-color: pink; height: 100vh; width: 100vw;'></div>
            <div class='part bot' style='background-color: white; height: 100vh; width: 100vw; position: relative;'>
                <div class="sub_wrapper" data-scroll>
                    <div class="top first">
                        <?php snippet('fa') ?>
                    </div>
                    <div class="top miroir">
                        <?php snippet('wa') ?>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php snippet('footer') ?>
    <?= js('assets/builds/bundle.js') ?>
    </div>
  </body>
</html>