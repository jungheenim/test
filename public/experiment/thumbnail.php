<?php

     function make_thumb($file, $thumb, $t_width,$t_height)
  {
    $source_image = imagecreatefromstring(file_get_contents($file)); //파일읽기
    $width = imagesx($source_image);
    $height = imagesy($source_image);

    $virtual_image = imagecreatetruecolor($t_width, $t_height); //가상 이미지 만들기

    imagecopyresampled($virtual_image, $source_image, 0, 0, 0, 0, $t_width, $t_height, $width, $height); //사이즈 변경하여 복사

    if(imagepng($virtual_image, $thumb)) // png파일로 썸네일 생성
    {
      echo "썸네일 처리 성공";
    }
    else {
      echo "썸네일 처리 실패";
    }


  }

  $original_image = "default_image.png";
  $width = 100;
  $height = 100;
  make_thumb('../images/img/'.$original_image, '../images/thumbimg/'.'('.$width.'x'.$height.')'.$original_image, $width, $height);

?>
