package com.ssafy.omz.api;

import com.ssafy.omz.service.MyPageService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api("myPageController API v1")
@RestController
@RequiredArgsConstructor
@RequestMapping("/mypage")
public class MyPageController {

    private final MyPageService myPageService;
    @ApiOperation(value = "마이페이지 메인", notes = "마이페이지 메인 정보 불러오기\n" +
            "member: memberId, 닉네임, mbti, 내 관상 퍼센테이지 정보, 제일 크게 나타난 관상 정보\n" +
            "miniroomId: 마이페이지 상단 버튼에 주소 매핑할 미니룸 아이디\n" +
            "items: 아바타에 착용한 아이템 정보 0은 착용 안 한 아이템")
    @GetMapping("/{memberId}")
    public ResponseEntity<?> getMyPageMain(@PathVariable Long memberId) {
        try {
            return new ResponseEntity<>(myPageService.getMyPageMain(memberId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "마이페이지 수정 메인", notes = "마이페이지 수정 페이지 정보 불러오기\n" +
            "닉네임, 엠비티아이, 선호하는 관상 정보 반환")
    @GetMapping("/modify/{memberId}")
    public ResponseEntity<?> getMyPageModify(@PathVariable Long memberId) {
        try {
            return new ResponseEntity<>(myPageService.getMyPageModify(memberId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "마이페이지 커스텀 메인", notes = "마이페이지 커스텀 페이지 정보 불러오기\n" +
            "memberId, 내 동물이름, 착용한 아이템 반환")
    @GetMapping("/custom/{memberId}")
    public ResponseEntity<?> getMyPageCustom(@PathVariable Long memberId) {
        try {
            return new ResponseEntity<>(myPageService.getMyPageCustom(memberId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
