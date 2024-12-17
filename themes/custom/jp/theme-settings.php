<?php

use Drupal\Core\Form\FormStateInterface;

/**
 * Custom setting for theme.
 */
function runsystem_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  $form['#attached']['library'][] = 'runsystem/theme-settings';
  $form['runsystem'] = [
    '#type'       => 'vertical_tabs',
    '#title'      => '<h3>' . t('Theme Settings') . '</h3>',
    '#default_tab' => 'general',
  ];
  // Addon
  $form['homepage'] = [
    '#type'  => 'details',
    '#title' => t('General'),
    '#description' => t('General information'),
    '#group' => 'runsystem',
  ];
  // Social tab.
  $form['social'] = [
    '#type'  => 'details',
    '#title' => t('Social'),
    '#description' => t('These icons appear in footer region.'),
    '#group' => 'runsystem',
  ];
  // SEO
//  $form['seo'] = [
//    '#type'  => 'details',
//    '#title' => t('SEO'),
//    '#description'  => t('<stong>Under Development</strong>'),
//    '#group' => 'runsystem',
//  ];
  // Insert codes
  $form['insert_codes'] = [
    '#type'  => 'details',
    '#title' => t('Script'),
    '#group' => 'runsystem',
  ];
  $form['homepage']['projects'] = [
    '#type'          => 'textfield',
    '#title'         => t('Project Number'),
    '#default_value' => theme_get_setting('projects', 'runsystem'),
  ];
  $form['homepage']['products'] = [
    '#type'          => 'textfield',
    '#title'         => t('Product Number'),
    '#default_value' => theme_get_setting('products', 'runsystem'),
  ];
  $form['homepage']['developers'] = [
    '#type'          => 'textfield',
    '#title'         => t('Developer Number'),
    '#default_value' => theme_get_setting('developers', 'runsystem'),
  ];
  $form['homepage']['partners'] = [
    '#type'          => 'textfield',
    '#title'         => t('Partner Number'),
    '#default_value' => theme_get_setting('partners', 'runsystem'),
  ];
  $form['homepage']['enterprise_project'] = [
    '#type'          => 'textfield',
    '#title'         => t('Enterprise Project'),
    '#default_value' => theme_get_setting('enterprise_project', 'runsystem'),
  ];
  $form['homepage']['enterprise_customer'] = [
    '#type'          => 'textfield',
    '#title'         => t('Enterprise Customer'),
    '#default_value' => theme_get_setting('enterprise_customer', 'runsystem'),
  ];
  $form['homepage']['outsourcing_project'] = [
    '#type'          => 'textfield',
    '#title'         => t('Outsourcing Project'),
    '#default_value' => theme_get_setting('outsourcing_project', 'runsystem'),
  ];
  $form['homepage']['outsourcing_customer'] = [
    '#type'          => 'textfield',
    '#title'         => t('Outsourcing Customer'),
    '#default_value' => theme_get_setting('outsourcing_customer', 'runsystem'),
  ];

  $form['social']['all_icons'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Show Social Icons'),
  ];
  $form['social']['all_icons']['all_icons_show'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Show social icons in footer'),
    '#default_value' => theme_get_setting('all_icons_show', 'runsystem'),
    '#description'   => t("Check this option to show social icons in footer. Uncheck to hide."),
  ];
  // Facebook.
  $form['social']['facebook_url'] = [
    '#type'          => 'textfield',
    '#title'         => t('Facebook Url'),
    '#description'   => t("Enter yours facebook profile or page url. Leave the url field blank to hide this icon."),
    '#default_value' => theme_get_setting('facebook_url', 'runsystem'),
  ];
  // Linkedin.
  $form['social']['linkedin_url'] = [
    '#type'          => 'textfield',
    '#title'         => t('Linkedin Url'),
    '#description'   => t("Enter yours Linkedin profile or page url. Leave the url field blank to hide this icon."),
    '#default_value' => theme_get_setting('linkedin_url', 'runsystem'),
  ];
  // Tiktok.
  $form['social']['tiktok_url'] = [
    '#type'          => 'textfield',
    '#title'         => t('Tiktok Url'),
    '#description'   => t("Enter yours Tiktok profile. Leave the url field blank to hide this icon."),
    '#default_value' => theme_get_setting('tiktok_url', 'runsystem'),
  ];

  $form['insert_codes']['js_code'] = [
    '#type'          => 'textarea',
    '#description'   => t("Enter codes from google, facebook, ..."),
    '#default_value' => theme_get_setting('js_code', 'runsystem'),
  ];
}
