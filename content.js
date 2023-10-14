function unfollow() {
    const confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
    if (confirmButton) {
        confirmButton.click();
        console.log('アンフォローしました');
    } else {
        console.log('アンフォローの確認ボタンが見つかりませんでした');
    }
}

function clickFollowingAndUnfollow() {
    const followingButton = document.querySelector('[data-testid$="-unfollow"]');
    
    if (followingButton) {
        followingButton.click();
        
        // アンフォローの確認モーダルが表示されるまで少し待ちます
        setTimeout(unfollow, 1000);
        
        // 次のアンフォロー処理のために再帰的に関数を呼び出します
        setTimeout(clickFollowingAndUnfollow, 2000);
    } else {
        console.log('これ以上アンフォローすべきユーザーがいません');
    }
}

// clickFollowingAndUnfollow();