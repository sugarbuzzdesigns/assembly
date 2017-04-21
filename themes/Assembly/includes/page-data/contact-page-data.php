<?php

$case_study_img_dir = get_template_directory_uri() . '/library/images/pages/case-studies/resized/desktop/';
$caseStudyFiles = scandir(get_template_directory() . '/library/images/pages/case-studies/resized/desktop');
$contactPhotos = [];
$caseStudyFileNum = 0;

$caseStudyFiles = array_filter($caseStudyFiles, function($item) {
    return !is_dir($item);
});

$caseStudyFiles = array_filter($caseStudyFiles, function($item) {
    return $item != '.DS_Store';
});

// print_r($caseStudyFiles);

foreach ($caseStudyFiles as $file) {
	$caseStudyFileNum++;

	$fileArray = array(
		'src' => $case_study_img_dir . $file,
		'alt' => preg_replace('/\\.[^.\\s]{3,4}$/', '', $file)
	);

	$contactPhotos['case_study_image-' . $caseStudyFileNum] = $fileArray;
}

// print_r($contactPhotos);
// $contactPhotos = array(
// 	array(
// 		'src' => 'services/large/03-Interior.jpg'
// 	),
// 	array(
// 		'src' => 'services/large/05-Interior.jpg'
// 	),
// 	array(
// 		'src' => 'services/large/04-Interior.jpg'
// 	),
// 	array(
// 		'src' => 'services/large/02-Interior.jpg'
// 	),
// 	array(
// 		'src' => 'case-studies/c-hospitality-content-1.jpg'
// 	),
// 	array(
// 		'src' => 'case-studies/c-hospitality-content-5.jpg'
// 	)
// );